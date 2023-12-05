// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// const SingleCourse = () => {

//   const [courses,setCourses] = useState([])

//   let getCourses = async ()=>{
//     try {
//       let response = await axios.get('/api/courses/getAllcourses');
//       console.log(response.data);
//       setCourses(response.data)
//     } catch (error) {
//       console.error(error)
//     }
//   }
//   useEffect(()=>{
//      getCourses()
//   },[])
//     return (

 
//         <div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-6 pt-8 px-7">
//         {Array.from({ length: 5 }).map((_, index) => (
//           <a href="#">
//           <div key={index} className="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
//             <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[65%] rounded-t-xl overflow-hidden">
//               <img
//                 className="w-full h-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
//                 src={`https://source.unsplash.com/400x400/?web-development-${index}`}
//                 alt={`Image Description ${index}`}
//               />
//             </div>
//             <div className="p-2 md:p-2">
//               <h3 className="text-lg font-bold text-gray-800 dark:text-white">
//                 Web Development For Beginners
//               </h3>
//               <p className="mt-0 text-gray-500 dark:text-gray-400">by travery media</p>
//               <p className='text-gray-400'>
//                 ₹499.00
//               </p>
//             </div>
//           </div>
//           </a>
//         ))}
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-6 pt-8 px-7">
//         {Array.from({ length: 5 }).map((_, index) => (
//           <a href="#">
//           <div key={index} className="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
//             <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[65%] rounded-t-xl overflow-hidden">
//               <img
//                 className="w-full h-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
//                 src={`https://source.unsplash.com/400x400/?web-development-${index}`}
//                 alt={`Image Description ${index}`}
//               />
//             </div>
//             <div className="p-2 md:p-2">
//               <h3 className="text-lg font-bold text-gray-800 dark:text-white">
//                 Web Development For Beginners
//               </h3>
//               <p className="mt-0 text-gray-500 dark:text-gray-400">by travery media</p>
//               <p className='text-gray-400'>
//                 ₹499.00
//               </p>
//             </div>
//           </div>
//           </a>
//         ))}
//       </div>
//       </div>

//     )
// }

// export default SingleCourse

import axios from 'axios';
import React, { useEffect, useState } from 'react';

const SingleCourse = () => {
  const [courses, setCourses] = useState([]);

  let getCourses = async () => {
    try {
      let response = await axios.get('/api/courses/getAllcourses');
      // console.log(response.data);
      let arr = response.data;
      arr.reverse();
      setCourses(arr);
      courses.reverse()
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-12 p-6 pt-8 px-10 sm:px-15 ">
        {courses.map((course, index) => (
          <a href={`/courseOverview/${course._id}`} key={index}>
            <div className="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]" style={{border:'0px',height:'19rem'}}>
              <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[65%] rounded-lg overflow-hidden">
                <img
                  className="w-full h-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
                  src={course.courseImage}
                  alt={`Image Description ${index}`}
                />
              </div>
              <div className="p-2 md:p-2">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">{course.courseTitle ||course.courseName}</h3>
                <p className="mt-0 text-gray-500 dark:text-gray-400">by traversy media</p>
                <p className="text-gray-400"> ₹{course.coursePrice || '499'}.00</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SingleCourse;
