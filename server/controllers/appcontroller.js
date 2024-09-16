import { Application } from "../models/appmodel.js";
import { Job } from "../models/jobmodel.js";

export const apply=async(req,res)=>{
    try {
        const userId = req.id;
        const jobId = req.params.id;
        if(!jobId){
            return res.status(400).json({
                message:"JobId required",
                success:false
            })
        }
        
        const applied = await Application.findOne({job:jobId,applicant:userId});
        if(applied){
            return res.status(400).json({
                message:"already applied",
                success:false
            })
        }
        const job = await Job.findById(jobId);
        if(!job){
            return res.status(404).json({
                message:"Job not found",
                success:false
            })
        }
        const newApplication = await Application.create({
            job:jobId,
            applicant:userId
        })
        job.applications.push(newApplication._id)
        await job.save()
        return res.status(201).json({
            message:"Job applied success   fully",
            success:true
        })

    }catch(err) {
        console.log(err)
    }
}

export const getApplications=async(req,res)=>{
    try {
        const userId = req.id;
        const applications = await Application.find({applicant:userId}).sort({createdAt:-1}).populate({
            path:"job",
            options:{sort:{createdAt:-1}},
            populate:{
                path:"companyId",
                options:{sort:{createdAt:-1}}
            }
        })
        if(!applications){
            return res.status(400).json({
                message:"No apllications yet",
                success:false
            })
        }
        return res.status(201).json({
            applications,
            success:true
        })
        
    }catch(err) {
        console.log(err)
    }
}

export const getApplicants=async(req,res)=>{
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId).sort({createdAt:-1}).populate({
            path:"applications",
            options:{sort:{createdAt:-1}},
            populate:{
                path:"applicant",
            }
        })
        if(!job){
            return res.status(400).json({
                message:"Job not found",
                success:false
            })
        }
        return res.status(201).json({
            job,
            success:true
        })
        
    }catch(err) {
        console.log(err)
    }
}

export const setStatus=async(req,res)=>{
    try {
        const {status} = req.body;
        const appId= req.params.id;
        if(!status){
            return res.status(400).json({
                message:"status is required",
                success:false
            })
        }
        const application =await  Application.findById(appId);
        if(!application){
            return res.status(404).json({
                message:"Applications not found",
                success:false
            })
        }
        application.status = status.toLowerCase();
        await application.save()
        return res.status(201).json({
            message:"status updated successfully",
            success:true
        })
        
    }catch(err) {
        console.log(err)
    }
}

