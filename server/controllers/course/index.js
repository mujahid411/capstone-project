import express from 'express';
import CourseModel from '../../models/CourseModel.js';
import {OneAI} from 'oneai';

const router = express.Router();


router.post('/createCourse',async (req,res)=>{
   try {
    let {courseTitle,courseDescription,coursePrice,courseImage,courseCategory,teacherId,teacherName} = req.body
    console.log(req.body)
    let courseData = {
        courseTitle,
        courseDescription,
        coursePrice,
        courseImage,
        courseCategory,
        teacherId,
        teacherName
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

router.get('/fetchCourse', async (req,res)=>{
   try {
    let id = req.query.id;
    let find = await CourseModel.findOne({_id:id});
    console.log(find);
    res.send(find);
   } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
    
   }

})

 router.get('/getAllCourses', async (req,res)=>{
   try {
    let find = await CourseModel.find();
    
   //  console.log(find);
    res.send(find);
   } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
    
   }

})

router.post('/updateCourse', async (req,res)=>{
   try {
   let courseId = req.query.id;
   let find = await CourseModel.findById(courseId);
   if(!find){
      return res.status(400).json({ error: 'course not found' });
   }
   let updateData = req.body
   let updatedCourse = await CourseModel.updateOne({_id:courseId},
      {$set:updateData})
      res.send(updatedCourse);
  
    
   //  console.log(find);
   //  res.send(find);
   } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
    
   }

})

router.get('/summary', async (req,res)=>{
   try {

      const content = req.headers.content;
      const oneai = new OneAI('61d6a4bf-c11f-4b1d-ba68-04b45d1c0b49');
      
      const pipeline = new oneai.Pipeline(
         oneai.skills.summarize(),
         {
            multilingual:{
               enabled:true
            }
         }
       
      );
      const output = await pipeline.run(content);
      res.status(200).json({success:'video transcribed'});
      
      console.log(output);
      // const pipeline = new oneai.Pipeline(
      //    oneai.skills.transcribe({ speaker_detection: true, }) );
      //    pipeline.runFile(content).then(console.log);
   } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
    
   }

})

export default router;