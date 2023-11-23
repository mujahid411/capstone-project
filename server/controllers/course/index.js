import express from 'express';
import CourseModel from '../../models/CourseModel.js';
const router = express.Router();


router.post('/createCourse',async (req,res)=>{
   try {
    let {courseTitle,courseDescription,coursePrice,courseImage,courseCategory} = req.body
    let courseData = {
        courseTitle,
        courseDescription,
        coursePrice,
        courseImage,
        courseCategory
    }
    let courseDetails = new CourseModel(courseData);
    let response = await courseDetails.save()
    console.log(response)
    let id = response._id

    return res.status(200).json({success:'course created successfully!',id})
   } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Internal Server Error' });

   }
})

router.get('/getCourse', async (req,res)=>{
   try {
    let {courseIdValue} = req.query;
    let find = await CourseModel.findOne({_id:courseIdValue});
    console.log(find);
    res.send(find);
   } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
    
   }

})

router.put('/getCourse', async (req,res)=>{
    try {
     let {courseIdValue} = req.query;
     let find = await CourseModel.findOne({_id:courseIdValue});
     console.log(find);
     res.send(find);
    } catch (error) {
     console.error(error);
     return res.status(500).json({ error: 'Internal Server Error' });
     
    }
 
 })


export default router;