
import Common from "@/app/app/helper.js/Common";
import Admin from "@/app/app/models/Admin";
import dbConnection from '@/app/utils/dbconnects'

let banner = ["heading", "paragragph", "banner_image", "feature_text1", "feature_text2", "feature_text3", "feature_text4", "primary_btntext", "secondary_btntext"]
let afterBanner = ["heading1", "paragragph1", "heading2", "paragragph2", "heading3", "paragragph3", "heading4", "paragragph4"]
let service = ["main_heading", "main_paragragph", "service01_heading", "service01_paragragph", "service02_heading", "service02_paragragph", "service03_heading", "service03_paragragph", "service04_heading", "service04_paragragph"]
let ads = ["heading", "paragragph", "banner_image", "primary_btntext", "secondary_btntext"]
let knowMoreSection = ["heading", "paragragph", "banner_image", "button_text"]

let Controller = {};


// Controller.getItems = async (request) => {
//     const searchParams = request.nextUrl.searchParams;
//     let page = searchParams.get('page') ? searchParams.get('page') : 1;
//     const listPerPage = searchParams.get('limit') ? searchParams.get('limit') : 10;
//     const type = searchParams.get('type') ? searchParams.get('type') : "";
//     let keyword = searchParams.get('keyword') ? searchParams.get('keyword').trim() : '';

//     try {
//         page = parseInt(page);
//         let limit = parseInt(listPerPage);
//         let skip = (page - 1) * limit;
//         let query = {};


//         if (type) {
//             query["type"] = type
//         }

//         if (keyword) {
//             query = {
//                 $or: [
//                     { name: { $regex: keyword, $options: 'i' } },
//                 ]
//             }
//         }

//         let result = [];
//         if (listPerPage == -1) {
//             result = await InvItem.find(query).populate('measuringUnit')
//                 .sort({ createdAt: 1 });
//         } else {
//             result = await InvItem.find(query).populate('measuringUnit')
//                 .limit(limit)
//                 .skip(skip)
//                 .sort({ createdAt: 1 });
//         }

//         let totalCounts = await InvItem.find(query).countDocuments();
//         let pageCounts = Math.ceil(totalCounts / limit);

//         return {
//             status: "success",
//             data: result,
//             totalCounts: totalCounts,
//             pageCounts: pageCounts,
//             currentPage: page,
//             perPage: limit,
//         };
//     } catch (error) {
//         return { message: error.message, status: "error" };
//     }
// };

Controller.updateAdminModule = async (request) => {
    await dbConnection();
    let postData = await request.json();
    let validateFields = []

    // console.log("postData",postData)

    if (postData.type == "banner") {
        validateFields = banner
    } else if (postData.type == "afterBanner") {
        validateFields = afterBanner
    } else if (postData.type == "service") {
        validateFields = service
    } else if (postData.type == "ads") {
        validateFields = ads
    } else if (postData.type == "knowMoreSection") {
        validateFields = knowMoreSection
    }

    try {
        let response = await Common.requestFieldsValidation(
            validateFields,
            postData
        );

        if (response.status) {
            if (!postData?.id) {
                if (postData?.type == "banner") {
                    let bannerData = {
                        heading: postData.heading,
                        paragragph: postData.paragragph,
                        banner_image: postData.banner_image,
                        feature_text1: postData.feature_text1,
                        feature_text2: postData.feature_text2,
                        feature_text3: postData.feature_text3,
                        feature_text4: postData.feature_text4,
                        primary_btntext: postData.primary_btntext,
                        secondary_btntext: postData.secondary_btntext,
                    };

                    let adminData = await Admin.create({ 'banner': bannerData });
                    if (adminData?._id) {
                        return { message: "Banner Added Successfully.", status: "success", data: adminData };
                    } else {
                        return { message: "Something went wrong.", status: "error" };
                    }

                } else if (postData.type == "afterBanner") {
                    let updateData = {
                        heading1: postData.heading1,
                        paragragph1: postData.paragragph1,
                        heading2: postData.heading2,
                        paragragph2: postData.paragragph2,
                        heading3: postData.heading3,
                        paragragph3: postData.paragragph3,
                        heading4: postData.heading4,
                        paragragph4: postData.paragragph4,
                    };

                    let adminData = await Admin.create({ 'after_banner': updateData });
                    if (adminData?._id) {
                        return { message: "AfterBanner Added Successfully.", status: "success", data: adminData };
                    } else {
                        return { message: "Something went wrong.", status: "error" };
                    }


                } else if (postData.type == "service") {
                    let updateData = {
                        main_heading: postData.main_heading,
                        main_paragragph: postData.main_paragragph,
                        service01_heading: postData.service01_heading,
                        service01_paragragph: postData.service01_paragragph,
                        service02_heading: postData.service02_heading,
                        service02_paragragph: postData.service02_paragragph,
                        service03_heading: postData.service03_heading,
                        service03_paragragph: postData.service03_paragragph,
                        service04_heading: postData.service04_heading,
                        service04_paragragph: postData.service04_paragragph,
                    };

                    let adminData = await Admin.create({ 'service': updateData });

                    if (adminData?._id) {

                        return { message: "Service Added Successfully.", status: "success", data: adminData };
                    } else {
                        return { message: "Something went wrong.", status: "error" };
                    }

                } else if (postData.type == "ads") {
                    let updateData = {
                        heading: postData.heading,
                        paragragph: postData.paragragph,
                        banner_image: postData.banner_image,
                        primary_btntext: postData.primary_btntext,
                        secondary_btntext: postData.secondary_btntext
                    };

                    let adminData = await Admin.create({ 'ads': updateData });

                    if (adminData?._id) {

                        return { message: "Ads Added Successfully.", status: "success", data: adminData };
                    } else {
                        return { message: "Something went wrong.", status: "error" };
                    }
                } else if (postData.type == "knowMoreSection") {
                    let updateData = {
                        heading: postData.heading,
                        paragragph: postData.paragragph,
                        banner_image: postData.banner_image,
                        button_text: postData.button_text,
                    };

                    let adminData = await Admin.create({ 'know_more_section': updateData });

                    if (adminData?._id) {

                        return { message: "Know More Section Added Successfully.", status: "success", data: adminData };
                    } else {
                        return { message: "Something went wrong.", status: "error" };
                    }
                }

            } else {
                //    console.log("call update")
                let record = await Admin.findOne({ _id: postData?.id })
                if (record) {
                    if (postData.type == "banner") {
                        let updateData = {
                            banner: {
                                heading: postData.heading,
                                paragragph: postData.paragragph,
                                banner_image: postData.banner_image,
                                feature_text1: postData.feature_text1,
                                feature_text2: postData.feature_text2,
                                feature_text3: postData.feature_text3,
                                feature_text4: postData.feature_text4,
                                primary_btntext: postData.primary_btntext,
                                secondary_btntext: postData.secondary_btntext,
                            }
                        };
                        let adminData = await Admin.updateOne(
                            { _id: record._id },
                            {
                                $set: updateData,
                            }
                        );
                        return { message: "Banner Updated Successfully.", status: "success", data: adminData };
                    } else if (postData.type == "afterBanner") {
                        let updateData = {
                            after_banner: {
                                heading1: postData.heading1,
                                paragragph1: postData.paragragph1,
                                heading2: postData.heading2,
                                paragragph2: postData.paragragph2,
                                heading3: postData.heading3,
                                paragragph3: postData.paragragph3,
                                heading4: postData.heading4,
                                paragragph4: postData.paragragph4,
                            }
                        };

                        let adminData = await Admin.updateOne(
                            { _id: record._id },
                            {
                                $set: updateData,
                            }
                        );
                        return { message: "After Banner Updated Successfully.", status: "success", data: adminData };

                    } else if (postData.type == "service") {
                        let updateData = {
                            service: {
                                main_heading: postData.main_heading,
                                main_paragragph: postData.main_paragragph,
                                service01_heading: postData.service01_heading,
                                service01_paragragph: postData.service01_paragragph,
                                service02_heading: postData.service02_heading,
                                service02_paragragph: postData.service02_paragragph,
                                service03_heading: postData.service03_heading,
                                service03_paragragph: postData.service03_paragragph,
                                service04_heading: postData.service04_heading,
                                service04_paragragph: postData.service04_paragragph,
                            }
                        };


                        let adminData = await Admin.updateOne(
                            { _id: record._id },
                            {
                                $set: updateData,
                            }
                        );
                        return { message: "Service Updated Successfully.", status: "success", data: adminData };

                    } else if (postData.type == "ads") {
                        let updateData = {
                            ads: {
                                heading: postData.heading,
                                paragragph: postData.paragragph,
                                banner_image: postData.banner_image,
                                primary_btntext: postData.primary_btntext,
                                secondary_btntext: postData.secondary_btntext
                            }
                        };

                        let adminData = await Admin.updateOne(
                            { _id: record._id },
                            {
                                $set: updateData,
                            }
                        );
                        return { message: "Ads Updated Successfully.", status: "success", data: adminData };
                    } else if (postData.type == "knowMoreSection") {
                        let updateData = {
                            know_more_section: {
                                heading: postData.heading,
                                paragragph: postData.paragragph,
                                banner_image: postData.banner_image,
                                button_text: postData.button_text,
                            }
                        };
                        let adminData = await Admin.updateOne(
                            { _id: record._id },
                            {
                                $set: updateData,
                            }
                        );

                        console.log("adminData", adminData)
                        return { message: "Know More Section Updated Successfully.", status: "success", data: adminData };
                    }
                } else {
                    return { message: "Something went wrong.", status: "error" };
                }
            }
        } else {
            return { message: "Required fields are missings.", status: "error" };
        }
    } catch (error) {
        return { message: error.message, status: "error" };
    }
}

export default Controller;
