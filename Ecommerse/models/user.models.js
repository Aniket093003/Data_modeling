import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
   username: {
    type: String,
    required,
    unique: true,
    lowercase: true
   },
   email: {
    type: String,
    required,
    unique: true,
    lowercase: true
   },
   password:{
    type: password,
    required: true
   },
}, {timestamps: true})


export const User = mongoose.model("User", userSchema)