import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    userName:{
        type:String,
        required:true,
        unique:true,
    },
    passWord:{
        type:String,
        required:true,
    },
    profilePic:{
        type:String,
        default:"",
    },

});

const User = mongoose.model("User", userSchema);

export default User;