import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import TeacherNavBar from "./TeacherNavBar";
import { useParams } from "react-router-dom";
import axios from "axios";
import Check from "./Check";
import { useGlobalContext } from "../Context";
import StudentNavBar from "./StudentNavBar";

const CourseOverview = () => {
  let {courseId} =useParams();
  let {user} = useGlobalContext()
  let role = user.role;
  let id = user._id
  let [courseData,setCourseData] = useState({});
  const stats = [
    {
        data: "35K",
        title: "Customers"
    },
    {
        data: "10K+",
        title: "Downloads"
    },
    {
        data: "40+",
        title: "Countries"
    },
    {
        data: "30M+",
        title: "Total revenue"
    },
]
  useEffect(()=>{
     async function fetchCourse(){
      try {
        let response = await axios.get('/api/courses/fetchCourse',{
          params:{
            id:courseId
          }
        })
        console.log(response.data)
        setCourseData(response.data)
      } catch (error) {
        console.error(error)
      }
     }
     fetchCourse()
  },[])

  const addToCart = async()=>{
    try {
       let response = await axios.post('/api/student/addToCart',{courseData},{
        params:{
           id:id
        }
       })
       console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>

     {role=='student'?<StudentNavBar/>:<TeacherNavBar/>}
      
     
      
       {/* <section className="w-full px-2 py-0 grid grid-cols-1 md:grid-cols-2  gap-4 max-w-8xl mx-auto pb-8 bg-gray-800 " style={{color:'white',textAlign:'initial'}}> */}
       <section className="w-full px-2 py-0 grid grid-cols-1 md:grid-cols-2  gap-4 max-w-8xl mx-auto pb-8 " style={{backgroundColor:'#F5F5F5',color:'black',textAlign:'initial'}}>

      <div className="pt-9 px-2 md:px-10  " >
                    <img src={courseData.courseImage} className="rounded-lg w-full object-cover" alt="" style={{height:'25rem'}} />
                </div>
      <div className=" p-1 sm:mt-10 text-gray-600 text-base " style={{color:''}}>
     
        <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl" style={{color:''}}>
                           {courseData.courseTitle}
                        </h3>
        <p className="text-base   my-4  max-w-2xl " style={{textAlign:'initial'}}>
        Description: {courseData.courseDescription} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident quasi dolores hic, earum excepturi cum libero ipsum quaerat culpa velit, repellat eum temporibus maxime alias modi ducimus obcaecati amet! Rem commodi obcaecati illum ullam nesciunt voluptatem fugiat totam quis iure! Veritatis tempore aspernatur debitis, enim est excepturi culpa ipsam itaque? lorem100 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam nobis in
          error repellat voluptatibus ad.
        </p>
        <p className="text-base   my-4 " style={{textAlign:'initial'}}>
          <span >

          Category: {courseData.courseCategory || 'traversy media'}
          </span>
        </p>
        <p className="text-base   my-4 " style={{textAlign:'initial'}}>
          <span >

          Author: {courseData.teacherName || 'traversy media'}
          </span>
        </p>
        
        <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95" >
          Buy Now for ₹{courseData.coursePrice}.00
        </button>
        {role=='student'?<button
        onClick={addToCart}
         className="block mt-3 bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95" >
          Add to Cart
        </button>:''}

      </div>
      
    </section>  
    {/* <section className="py-10 "  style={{backgroundColor:'#F5F5F5 ',color:'black '}} >
            <div className="w-full max-w-screen-xl mx-auto px-0 text-gray-600  items-start justify-between lg:flex md:px-0 ">
                <div className="w-full sm:hidden lg:block lg:max-w-2xl ">
                    <img src={courseData.courseImage} className="rounded-lg w-full" alt="" />
                </div>
                <div className="mt-6 gap-12 sm:mt-0 md:flex lg:block "  >
                    <div className="max-w-2xl" style={{textAlign:'initial'}}>
                        <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                           {courseData.courseTitle}
                        </h3>
                        <p className="mt-3 max-w-xl">
                           Description: {courseData.courseDescription} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis sollicitudin quam ut tincidunt.
                        </p>
                        <p className="mt-3 max-w-xl">
                         Category: {courseData.courseCategory}
                        </p>
                        <p className="mt-3 max-w-xl">
                         Author: {courseData.teacherName || 'traversy media'}
                        </p>
                    </div>
                    <div className="flex-none mt-6 md:mt-0 lg:mt-6">
                     
                    </div>
                </div>
            </div>
        </section> */}
        <Check/>
    </>
  
  );
};



export default CourseOverview;