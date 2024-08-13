import mongoose, { Schema, model } from "mongoose";

const adminSchema = new Schema(
  {
    
        banner: {
            heading: { type: String, require: true },
            paragragph: { type: String, require: true },
            banner_image: { type: String, require: true },
            feature_text1: { type: String, require: true },
            feature_text2: { type: String, require: true },
            feature_text3: { type: String, require: true },
            feature_text4: { type: String, require: true },
            primary_btntext: { type: String, require: true },
            secondary_btntext: { type: String, require: true },
        },

        afterBanner: {
            heading1: { type: String, require: true },
            paragragph1: { type: String, require: true },
            heading2: { type: String, require: true },
            paragragph2: { type: String, require: true },
            heading3: { type: String, require: true },
            paragragph3: { type: String, require: true },
            heading4: { type: String, require: true },
            paragragph4: { type: String, require: true },
        },

        services: {
            main_heading: { type: String, require: true },
            main_paragragph: { type: String, require: true },
            service01_heading: { type: String, require: true },
            service01_paragragph: { type: String, require: true },
            service02_heading: { type: String, require: true },
            service02_paragragph: { type: String, require: true },
            service03_heading: { type: String, require: true },
            service03_paragragph: { type: String, require: true },
            service04_heading: { type: String, require: true },
            service04_paragragph: { type: String, require: true },
        },

        ads: {
            heading: { type: String, require: true },
            paragragph: { type: String, require: true },
            banner_image: { type: String, require: true },
            primary_btntext : { type: String, require: true },
            secondary_btntext : { type: String, require: true }
        },

        knowMoreSection: {
            heading: { type: String, require: true },
            paragragph: { type: String, require: true },
            banner_image: { type: String, require: true },
            button_text : { type: String, require: true },
        },

        Footer: {
            status: {
                type: Number,
                enum: [1, 0],
                default: 0
            },
            number: String,
            issueDate: Date,
            expireDate: Date,
            issuePlace: String,
            ecrStatus: {
                type: String,
                enum: passportECRStatusEnum,
                default: PassportECRStatus[0].value
            }
        },

        files: [
            {
                name: { type: String },
                figure: String,
                mediaFile: {
                    key: String,
                    URL: String
                }
            }
        ],

  },
  {
    timestamps: true,
  }
);

const Admin = mongoose.models.Admin || model("Admin", adminSchema);
export default Admin;
