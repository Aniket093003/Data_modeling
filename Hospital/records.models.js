import mongoose from "mongoose";

const recordSchema = mongoose.Schema({
    
}, 
{ timestamps: true},)

export const Record = mongoose.model("Record", recordSchema )