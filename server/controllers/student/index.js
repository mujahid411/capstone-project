import express from 'express'
import StudentModel from '../../models/StudentModel.js';
import jwt from 'jsonwebtoken';
const router = express.Router()

// import { addCourseValidation, studentRegisteration, userLoginValidations } from '../../middleware/validators/index.js';

router.post('/studentRegister',async(req,res)=>{
try {
  let   { name, email, password, password2, mobileNumber, address }=req.body
  console.log(req.body)
 

  if (password !== password2) {
    return res.status(400).json({ error: 'password do not match!!' })
}
let findstudent = await StudentModel.findOne({ email })
if(findstudent){
    res.status(400).json({error:'email already exists please login!!'})
}

let studentData = {
    name,
    email,
    password,
    mobileNumber,
    address,
    role:'student'
}
console.log(studentData)
let studentDetails= new StudentModel(studentData)
await studentDetails.save()
res.status(200).json({success:'student registered successfully!'})

} catch (error) {
    console.error(error)
    res.status(500).json({error:'Internal server error'})

}

})
router.post('/studentLogin',async(req,res)=>{
    try {
        let {
            email,
            password
        }=req.body
        let findUser = await StudentModel.findOne({email,password})
        console.log(findUser)
        if(!findUser){
            return res.status(404).json({error:'Email not found,please register'});
        }
        else{
            let payload={
                email:req.body.email,
                role:findUser.role,
                userId: findUser._id,
                // student_id:find
                // location: location
            }
            let privatekey='codeforindia';
            var token =jwt.sign(payload,privatekey,{expiresIn:'1d'});
            res.status(200).json({ success: 'student logged in successfully', token ,role:findUser.role,status:true,student_id:findUser._id});
        }
    } catch (error) {
        console.error(error)
    }
})

router.post('/studentUpdate',async (req,res)=>{
    try {
     let id = req.query.id;
     let find = await StudentModel.findById(id);
     console.log(req.body,'req.body')
     let updateData = req.body
     console.log(updateData,'updateData');
    let updatedDetails = await StudentModel.updateOne({_id:id},
       {$set:updateData})
     //   res.send(updateData); 
       console.log(updatedDetails)
       let payload={
         userDetails:updateData
     }
     // console.log('payload',payload)
     let privatekey='codeforindia';
     
     let token =jwt.sign(payload,privatekey,{expiresIn:'1d'});
     console.log(token)
     res.status(200).json({ success: 'student data updated successfully', token});
 
    } catch (error) {
     console.error(error);
     res.status(500).json({error:'Internal server error'})
 
    }
 
 })



router.post('/addCourse',async(req,res)=>{
    try {
        console.log('from add course')
        let {courseName,description,courseImage,courseCategory,price,addChapter,token}=req.body
        const decodedToken = jwt.verify(token, jwtkey);
        console.log(decodedToken.userId)
        const student_id=decodedToken.userId
        let courseData = {
            courseName,
            description,
            courseImage,
            courseCategory,
            price,
            addChapter,
            student_id
        }
        console.log({courseName,description,courseImage,courseCategory,price,addChapter,token})
        // const token = req.headers.authorization.split(' ')[1];

        // let deCodetoken = 
        let findCourse = await CourseModel.findOne({courseName,description,courseImage,courseCategory,price,addChapter,student_id})
        if(findCourse){
            res.status(400).json({error:'course already exists'})
        }else{ let courseDataDetails = new CourseModel(courseData);
            await courseDataDetails.save()
            res.status(200).json({success:'course added successfully!!'})}
       
    } catch (error) {
        console.error(error)
       return res.status(500).json({error:'Internal server error'})
    }
})
// router.post('/addChapter',async(req,res)=>{
//     try {
//         let {chapterName,chapterVideo}=req.body
//         let 
//     } catch (error) {
        
//     }
// })
export default router