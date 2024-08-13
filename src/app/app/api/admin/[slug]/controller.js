
import InvItem from "@/models/InvItem";
import InvManualAdjustment from "@/models/InvManualAdjustment";
import InvItemStock from "@/models/InvItemStock";
import InvItemStockHistory from "@/models/invItemStockHistory";
import { getCommonProperty, setCommonProperty } from "../../hr/function";
import { getNextDocumentNumber } from "../function";

import Common from "@/helpers/Common";
import User from "@/models/User";

let Controller = {};


Controller.getItems = async (request) => {
    const searchParams = request.nextUrl.searchParams;
    let page = searchParams.get('page') ? searchParams.get('page') : 1;
    const listPerPage = searchParams.get('limit') ? searchParams.get('limit') : 10;
    const type = searchParams.get('type') ? searchParams.get('type') : "";
    let keyword = searchParams.get('keyword') ? searchParams.get('keyword').trim() : '';

    try {
        page = parseInt(page);
        let limit = parseInt(listPerPage);
        let skip = (page - 1) * limit;
        let query = {};


        if (type) {
            query["type"] = type
        }

        if (keyword) {
            query = {
                $or: [
                    { name: { $regex: keyword, $options: 'i' } },
                ]
            }
        }

        let result = [];
        if (listPerPage == -1) {
            result = await InvItem.find(query).populate('measuringUnit')
                .sort({ createdAt: 1 });
        } else {
            result = await InvItem.find(query).populate('measuringUnit')
                .limit(limit)
                .skip(skip)
                .sort({ createdAt: 1 });
        }

        let totalCounts = await InvItem.find(query).countDocuments();
        let pageCounts = Math.ceil(totalCounts / limit);

        return {
            status: "success",
            data: result,
            totalCounts: totalCounts,
            pageCounts: pageCounts,
            currentPage: page,
            perPage: limit,
        };
    } catch (error) {
        return { message: error.message, status: "error" };
    }
};

Controller.addItem = async (request) => {
    let currentUser = request.user;
    let postData = await request.json();
    const validateFields = [
        "uniqueId",
        "name",
        "type",
        "measuringUnit",
        "hsn",
        "stockLevelMin",
        "stockLevelMax",
        "currentStock",
        "price",
        "tax"
    ];

    try {
        let response = await Common.requestFieldsValidation(
            validateFields,
            postData
        );

        if (response.status) {
            let quantity = postData?.currentStock ? postData?.currentStock : 0;
            let updateData = {
                uniqueId: postData.uniqueId,
                name: postData.name,
                type: postData.type,
                measuringUnit: postData.measuringUnit,
                hsn: postData.hsn,
                stockLevel: { min: postData.stockLevelMin, max: postData.stockLevelMax },
                price: postData.price,
                tax: postData.tax

            };
            let invItem = new InvItem(updateData);
            let invData = await invItem.save();
            if (invData?._id) {
                const targetStore = postData?.initialstockstore
                if (targetStore && quantity) {
                    let items = {
                        itemId: invData._id,
                        toStore: targetStore,
                        quantity: quantity,
                        note: "Item creation at onboarding",
                    };

                    let docNumber = `Onboarding_${postData.uniqueId}`;
                    const docNumberFormat = await getCommonProperty('onboardingDocNumberFormat');
                    if (docNumberFormat?.value && docNumberFormat?.value?.nextNumber) {
                        docNumber = docNumberFormat.value.prefix.concat(docNumberFormat.value.nextNumber);

                        let nextNum = await getNextDocumentNumber(docNumberFormat.value.nextNumber);
                        await setCommonProperty('onboardingDocNumberFormat', {
                            seriesName: docNumberFormat.value.seriesName,
                            prefix: docNumberFormat.value.prefix,
                            nextNumber: nextNum
                        });
                    }

                    let fields = {
                        userId: currentUser._id,
                        docNumber: docNumber,
                        items: items
                    }
                    const InvManualAdjustmentObj = new InvManualAdjustment(fields);
                    let result = await InvManualAdjustmentObj.save();
                    if (result._id) {
                        let newQuantity = quantity;
                        let stocksHistory = {
                            item: invData._id,
                            store: targetStore,
                            userId: currentUser._id,
                            changeVia: 'onboarding',
                            adjustment: result._id,
                            previousQuantity: 0,
                            change: newQuantity,
                            newQuantity: newQuantity,
                            note: 'Item creation at onboarding',
                            toStore: targetStore
                        }
                        let invItemStockHistoryObj = new InvItemStockHistory(stocksHistory);
                        await invItemStockHistoryObj.save();

                        let itemStock = {
                            item: invData._id,
                            store: targetStore,
                            change: newQuantity,
                            quantity: newQuantity,
                        }

                        let invItemStockObj = new InvItemStock(itemStock);
                        await invItemStockObj.save();
                    }
                }

                return { message: "Item  Added Successfully.", status: "success", data: invData };
            } else {
                return { message: "Something went wrong.", status: "error" };
            }
        } else {
            return { message: "Required fields are missings.", status: "error" };
        }
    } catch (error) {
        return { message: error.message, status: "error" };
    }
}

export default Controller;
