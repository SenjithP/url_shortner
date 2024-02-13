import mongoose from "mongoose";

const urlSchema = new mongoose.Schema(
  {
    originalUrl: {
      type: String,
      required: true,
    },
    shortenedUrl:{
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

const URL = mongoose.model("URL", urlSchema);

export default URL;
