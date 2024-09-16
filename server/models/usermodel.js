import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    phonenumber:{
        type:Number,
        required:true
    },
    role:{
        type:String,
        enum:["student","recruiter"]
    },
    Profile:{
       bio:{type:String},
       skills:[{type:String}],
       resume:{type:String},
       resumeName:{type:String},
       company:{type:mongoose.Schema.Types.ObjectId,ref:"Company"},
       profilePhoto:{
        type:String,
        default:""
       }
    },
},{timestamps:true});

export const User = mongoose.model('User',userSchema);