import {User} from '../models/usermodel.js'
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export const register = async(req,res)=>{
    try{
        const {fullname,email,phonenumber,password,role}=req.body;
        if(!fullname || !email || !password || !phonenumber || !role){
            return res.status(400).json({
                message:"something is missing",
                success:false
            });
        }
        const user = await User.findOne({email})
        if(user){
            return res.status(400).json({
                message:"user already exists",
                success:false
            });
        }
        const hashedPass = await bcrypt.hash(password,10);

        await User.create({
            fullname,
            email,
            phonenumber,
            password:hashedPass,
            role,
        })
        return res.status(201).json({
            message:'Accopunt Created Successfully',
            success:true
        })
    }
    catch(err){
        console.log(err);
    }
}

export const login = async(req,res)=>{
    try{
        const {email,password,role}=req.body;
        if(!email || !password || !role){
            return res.status(400).json({
                message:"something is missing",
                success:false
            });
        }
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({
                message:"Incorrect Email or Password",
                success:false
            });
        }
        
        const match = await bcrypt.compare(password,user.password);
        if(!match){
            return res.status(400).json({
                message:"Incorrect Email or Password",
                success:false
            });
        }

        if(role != user.role){
            return res.status(400).json({
                message:"User doesnt exist with current role",
                success:false
            });
        }

        const tokenData = {
            UserId:user._id
        }
        const token = await jwt.sign(tokenData,process.env.SECRET_KEY,{expiresIn:"10d"})

        let user1 = {
            _id:user._id,
            fullname:user.fullname,
            email:user.email,
            phonenumber:user.phonenumber,
            role:user.role,
            profile:user.profile
        }

        return res.status(200).cookie("token",token,{maxAge:24*60*60*1000,httpsOnly:true,sameSite:"strict"}).json({
            message:`welcome ${user.fullname}`,
            user1,
            success:true
        })
    }
    catch(err){
        console.log(err);
    }
}

export const logout = async(req,res)=>{
    try{
        return res.status(200).cookie("token","",{maxAge:0}).json({
            message:'Logged out successfully',
            success:true
        })
    }
    catch(err){
        console.log(err);
    }
}

export const updateProfile = async(req,res)=>{
    try{
        const {fullname,email,phonenumber,bio,skills}= req.body;
        const file = req.file;
        const userId = req.id;
        let user = await User.findById(userId);   
        if(skills){
            const skillsArray = skills.split(','); 
        }
        if(!user){
            return res.status(400).json({
                message:"user not found1",
                success:false
            });
        }

       if(fullname) user.fullname = fullname
       if(email) user.email= email
       if(phonenumber) user.phonenumber = phonenumber
       if(bio) user.profile.bio = bio
       if(skills)user.profile.skills = skills

        await user.save()

        user = {
            _id: user._id,
            fullname : user.fullname,
            email : user.email,
            phonenumber: user.phonenumber,
            role: user.role,
            profile: user.profile
        }

        return res.status(200).cookie("token","",{maxAge:0}).json({
            message:'User updated successfully',
            user,
            success:true
        })
    }
    catch(err){
        console.log(err);
    }
}
