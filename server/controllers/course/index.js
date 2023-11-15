import express from 'express';
import CourseModel from '../../models/CourseModel.js';
const router = express.Router();


router.post('/createCourse',async (req,res)=>{
    let {courseTitle} = req.body
    let courseData = {
        courseTitle

    }
    let courseDetails = new CourseModel(courseData);
    let response = await courseDetails.save()
    console.log(response)
    let id = response._id

    return res.status(200).json({success:'course created successfully!',id})
})


export default router;