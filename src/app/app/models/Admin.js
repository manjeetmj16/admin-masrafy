import mongoose, { Schema, model } from "mongoose";

const adminSchema = new Schema(
  {
    
        banner: {
            heading: String,
            paragragph: String,
            banner_image: String,
            feature_text1: String,
            feature_text2: String,
            feature_text3: String,
            feature_text4: String,
            primary_btntext: String,
            secondary_btntext: String,
        },

        after_banner: {
            heading1: String,
            paragragph1: String,
            heading2: String,
            paragragph2: String,
            heading3: String,
            paragragph3: String,
            heading4: String,
            paragragph4: String,
        },

        service: {
            main_heading: String,
            main_paragragph: String,
            service01_heading: String,
            service01_paragragph: String,
            service02_heading: String,
            service02_paragragph: String,
            service03_heading: String,
            service03_paragragph: String,
            service04_heading: String,
            service04_paragragph: String,
        },

        ads: {
            heading: String,
            paragragph: String,
            banner_image: String,
            primary_btntext : String,
            secondary_btntext : String
        },

        know_more_section: {
            heading: String,
            paragragph: String,
            banner_image: String,
            button_text : String,
        },
  },
  {
    timestamps: true,
  }
);

const Admin = mongoose.models.Admins || model("Admins", adminSchema);
export default Admin;
