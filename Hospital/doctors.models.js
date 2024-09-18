import mongoose from "mongoose";

const doctorSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required,
    },
    specialization: {
      type: String,
      required,
    },
    diagnosing: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
    },
    salary: {
      type: String,
      required,
    },
    qualification: {
      type: String,
      required,
    },
    expInYears: {
      type: Number,
      required,
      default: 0,
    },
    workInHospitals: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
      },
    ],
  },
  { timestamps: true }
);

export const Doctor = mongoose.model("Doctor", doctorSchema);
