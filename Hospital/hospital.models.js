import mongoose from "mongoose";

const hospitalSchema = mongoose.Schema(
  {
    addressLine1: {
      type: String,
      required,
    },
    addressLine2: {
      type: String,
    },
    city: {
      type: String,
      required,
    },
    pincode: {
      type: String,
      required,
    },
    name: {
      type: String,
      required,
    },
    spelizedIn: [{
        type: String
    }]
  },
  { timestamps: true }
);

export const Hospital = mongoose.model("Hospital", hospitalSchema);
