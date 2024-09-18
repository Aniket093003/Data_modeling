import mongoose from "mongoose";

const patientSchema = mongoose.Schema({
    name: {
        type: String,
        required,
    },
    diagnosedWith: {
        type: String,
        required
    },
    
    address: {
        type: String,
        required
    },
    age: {
        type: Number,
        required
    },
    bloodGroup: {
        type: String,
        required
    },
    gender: {
        type: String,
        required
        enum: ["MALE","FEMALE","TRANSE"]
    },
    admittedIn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital"
    }

}, { timestamps: true},)

export const Patient = mongoose.model("Patient", patientSchema )