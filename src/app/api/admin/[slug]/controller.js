

// import Common from "@/app/helper.js/Common";
import Common from "@/app/helper.js/Common";
import Admin from "@/app/models/Admin";
import User from "@/app/models/User";
import dbConnection from '@/app/utils/dbconnects'

let banner = ["heading", "paragragph", "banner_image", "feature_text1", "feature_text2", "feature_text3", "feature_text4", "primary_btntext", "secondary_btntext"]
let afterBanner = ["heading1", "paragragph1", "heading2", "paragragph2", "heading3", "paragragph3", "heading4", "paragragph4"]
let service = ["main_heading", "main_paragragph", "service01_heading", "service01_paragragph", "service02_heading", "service02_paragragph", "service03_heading", "service03_paragragph", "service04_heading", "service04_paragragph"]
let ads = ["heading", "paragragph", "banner_image", "primary_btntext", "secondary_btntext"]
let knowMoreSection = ["heading", "paragragph", "banner_image", "button_text"]

let Controller = {};

Controller.signIn = async (request) => {
    let postData = await request.json();

    const validateFields = [
        "email",
        "password"
    ];

    try {
        let response = await Common.requestFieldsValidation(
            validateFields,
            postData
        );
        if (response.status) {
            console.log("email", postData.email)
            let email = postData.email.toLowerCase();
            let user = await User.findOne({ "email": email });
            console.log("user", user)
            if (user) {
                return { message: "Login Successfully.", status: "success" };
                // const checkPassword = await bcrypt.compare(password, user.password);
                // if (!checkPassword) {
                //     throw new Error("Invalid credentials");
                // }
            } else {
                throw new Error("Invalid credentials");
            }

        } else {

            return { message: "Something went wrong.", status: "error" };
        }
    } catch (error) {
        console.log("error", error.message)
        return { message: error.message, status: "error" };
    }
}

Controller.signUp = async (request) => {
    let postData = await request.json();

    const validateFields = [
        "first_name",
        "last_name",
        "email",
        "password"
    ];

    try {
        let response = await Common.requestFieldsValidation(
            validateFields,
            postData
        );
        if (response.status) {
            let email = postData.email.toLowerCase();
            let user = await User.findOne({ email });
            if (user) {
                return { message: "User Already Registered", status: "error" };
            } else {
                let obj = {
                    first_name: postData.first_name,
                    last_name: postData.last_name,
                    email: postData.email,
                    password: postData.password
                }
                let record = await User.create(obj)
                if (record) {
                    return { message: "Login Successfully.", status: "success" };
                }
            }
        } else {
            return { message: "Something went wrong.", status: "error" };
        }
    } catch (error) {
        return { message: error.message, status: "error" };
    }
}

Controller.getAdminModuleById = async (request) => {
    const searchParams = request.nextUrl.searchParams;
    let id = searchParams.get('id');

    try {
        if (!id) {
            return {
                status: "error",
                message: "Something went wrong"
            };
        } else {
            let record = await Admin.findOne({ _id: id });
            if (record) {
                return { status: "success", data: record };
            } else {
                return { status: "error", data: record };
            }
        }
    } catch (error) {
        console.log("error", error)
        return { message: error.message, status: "error" };
    }
}


Controller.updateAdminModule = async (request) => {
    await dbConnection();
    let postData = await request.json();
    let validateFields = []
    console.log("postData.type",postData.type)
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

    // console.log("api calling")

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
