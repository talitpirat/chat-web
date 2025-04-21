import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async(req, res)=>{
    try{
        const {fullName,email,userName,passWord,confirmPassWord,gender} = req.body;

        if(passWord !== confirmPassWord){
            return res.status(400).json({message:"Password and Confirm Password do not match"});
        }
        const user = await User.findOne({userName});
        if(user){
            return res.status(400).json({message:"User already exists"});
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(passWord, salt);
        
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

        const newUser = new User({
            fullName,
            email,
            userName,
            passWord: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        }) 
        
        if(newUser){
            generateTokenAndSetCookie(newUser._id, res);
            await newUser.save();
        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            email: newUser.email,
            userName: newUser.userName,
            profilePic: newUser.profilePic
        });
        }else{
            res.status(400).json({message:"Invalid user data"});
        }

    }catch(err){
        console.log("Error creating user:", err.message);
        res.status(500).json({err:"Error creating user"});
    }
}
export const login = async (req, res)=>{
    try{
        const {userName, passWord} = req.body;
        const user = await User.findOne({userName});
        const isPaswordCorrect = await bcrypt.compare(passWord, user?.passWord || ""); 

        if(!user || !isPaswordCorrect){
            return res.status(400).json({message:"Invalid username or password"});
        }
        generateTokenAndSetCookie(user._id, res);
        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            userName: user.userName,
            profilePic: user.profilePic
        });
    }catch(err){
        console.log("Error logging in user:", err.message);
        res.status(500).json({err:"Error logging in user"});
    }
}
export const logout = (req, res)=>{
    res.send("Logout User");
    console.log("Logout User");
}