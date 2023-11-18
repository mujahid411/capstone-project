// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// const CourseForm = () => {
//     let title;
//     let {courseId} = useParams();
//     let [courseData,setCourseData] = useState({
//         courseTitle:'',
//         courseDescription:'',
//         courseImage:null,
//         coursePrice:'',
//         courseCategory:'',
//         courseChapters:[],
//         courseQuiz:[]
//     })
//     console.log(courseId)
//     let handleChange = (e) => {
//         setCourseData({ ...courseData, [e.target.name]: e.target.value })
//       }
//     let courseDataFetch =  async ()=>{
//         const response = await axios.get('/api/courses/getCourse', {
//             params: {
//                  courseIdValue:courseId 
//                 }
//           });
//           console.log(response.data);
//            title = response.data.courseTitle
//           setCourseData(courseData.courseTitle=title)
//           console.log(courseData.courseTitle,'courseData')
//     }
//     useEffect(()=>{
//      courseDataFetch()
//     },[])
//   return (
//     <form className='flex flex-wrap bg-gray-00'  style={{width:'100vw',height:'100vh'}}> 
    
       
//         <div className="flex flex-wrap min-h-full flex-1 flex-col justify-center px-0 py-0 bg-gray-00 "  style={{width:'100vw',marginTop:'0',padding:'0',margin:'0'}} >
           

//                 <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm " style={{ fontSize: '1.0rem' }}>
//                     <div className="space-y-6"  >
//                         <div>
//                             <label htmlFor="title" className="block text-lg font-medium leading-6 text-gray-900" style={{ textAlign: '', fontSize: '1.0rem' }}>
//                                 Course Title
//                             </label>
//                             <div className="mt-0">
//                                 <input
//                                     id="title"
//                                     name="title"
//                                     type="text"
//                                     value={courseData.courseTitle}
//                                     onChange={handleChange}
//                                     required
//                                     className="block w-full h-11 rounded border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
//                                 />
//                             </div>
//                         </div>
                 
//                         <div>
//               <label htmlFor="description" className="block text-lg font-medium leading-6 text-gray-900" style={{ textAlign: '', fontSize: '1.0rem' }}>
//                Course Description
//               </label>
//               <div className="mt-0">
//                 <textarea
//                   id="description"
//                   name="description"
//                   autoComplete="description"
//                   required
                  
//                   className="block w-full h-24 rounded border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 h-24 p-2 px-3"
//                 ></textarea>
//               </div>
//             </div>
        
//                         <div>
//                             <label htmlFor="img" className="block text-lg font-medium leading-6 text-gray-900" style={{ textAlign: '', fontSize: '1.0rem' }}>
//                                 Course Image
//                             </label>
//                             <div className="mt-0">
//                                 <input
//                                     id="img"
//                                     name="img"
//                                     type="file"
//                                     required
//                                     className="w-full rounded   shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6 p-0 "
//                                 />
//                             </div>
//                         </div>

//                         <div>
//                             <div className="flex items-center justify-between">
//                                 <label htmlFor="password" className="block text-lg font-medium leading-6 text-gray-900" style={{ fontSize: '1.0rem' }}>
//                                     Course Category
//                                 </label>
//                             </div>
//                             <div className="mt-0">
//                                 <input
//                                     id="password"
//                                     name="password"
//                                     type="password"
//                                     autoComplete="current-password"
                                    
//                                     required
//                                     className="block w-full h-11 rounded border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
//                                 />
//                             </div>
//                         </div>

                  
//                     </div>


//                 </div>
//             </div>
//             <div className="flex flex-wrap min-h-full flex-1 flex-col justify-center px-1 py-1 bg-gray-00 "  style={{width:'100vw',marginTop:'0',padding:'0',margin:'0'}} >
          

//                 <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm" style={{ fontSize: '1.8rem' }}>
//                     <div className="space-y-6"  >
//                         <div>
//                             <label htmlFor="email" className="block text-lg font-medium leading-6 text-gray-900" style={{ textAlign: '', fontSize: '1.0rem' }}>
//                                 Chapters
//                             </label>
//                             <div className="mt-0">
//                                 <input
//                                     id="email"
//                                     name="email"
//                                     type="email"
//                                     autoComplete="email"
                                   
//                                     required
//                                     className="block w-full h-11 rounded border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
//                                 />
//                             </div>
//                         </div>

//                         <div>
//                             <div className="flex items-center justify-between">
//                                 <label htmlFor="password" className="block text-lg font-medium leading-6 text-gray-900" style={{ fontSize: '1.0rem' }}>
//                                     Quiz
//                                 </label>
//                             </div>
//                             <div className="mt-0">
//                                 <input
//                                     id="password"
//                                     name="password"
//                                     type="password"
//                                     autoComplete="current-password"
                                    
//                                     required
//                                     className="block w-full h-11 rounded border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
//                                 />
//                             </div>
//                         </div>
//                         <div>
//                             <label htmlFor="price" className="block text-lg font-medium leading-6 text-gray-900" style={{ textAlign: '', fontSize: '1.0rem' }}>
//                                 Course Price
//                             </label>
//                             <div className="mt-0">
//                                 <input
//                                     id="price"
//                                     name="price"
//                                     type="text"
                                   
//                                     required
//                                     className="block w-full h-11 rounded border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
//                                 />
//                             </div>
//                         </div>

//                         <div>
//                             <button
//                                 type="submit"
//                                 className="flex  justify-center rounded bg-indigo-600 px-3 py-1.5 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                                 style={{ fontSize: '1.0rem' }}
//                             >
//                                 Create Course
//                             </button>
//                         </div>
//                     </div>


//                 </div>
           
//   </div>
//  </form>
 
            
//   )
// }

// export default CourseForm

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CourseForm = () => {
  let { courseId } = useParams();
  let [courseData, setCourseData] = useState({
    courseTitle: '',
    courseDescription: '',
    courseImage: null,
    coursePrice: '',
    courseCategory: '',
    courseChapters: [],
    courseQuiz: [],
  });

  let handleChange = (e) => {
    setCourseData({ ...courseData, [e.target.name]: e.target.value });
  };

  let courseDataFetch = async () => {
    try {
      const response = await axios.get('/api/courses/getCourse', {
        params: {
          courseIdValue: courseId,
        },
      });
      console.log(response.data);
      setCourseData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    courseDataFetch();
  }, []);

  return (
    <form className="flex flex-col md:flex-row bg-gray-00" style={{ minHeight: '100vh', width: '100%' }}>
      <div className="md:w-1/2 p-10">
        <div className="mt-2 px-16">
          <label htmlFor="title" className="block text-lg font-bold font-medium leading-6 text-gray-900" style={{textAlign:''}}>
            Course Title
          </label>
          <input
            id="title"
            name="courseTitle"
            type="text"
            value={courseData.courseTitle}
            onChange={handleChange}
            required
            className="w-full h-11 rounded border-1 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm p-2"
          />
        </div>
        <div className="mt-2 px-16">
        <label htmlFor="description" className="block text-lg font-medium leading-6 text-gray-900" style={{textAlign:''}}>
            Course Description
          </label>
          <textarea
            id="description"
            name="courseDescription"
            autoComplete="description"
            required
            className="w-full h-24 rounded border-1 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm p-2 text-sm"
          ></textarea>
        </div>
        <div className="mt-2 px-16 " >
          <label htmlFor="title" className="block text-lg font-bold font-medium leading-6 text-gray-900" style={{textAlign:''}}>
            Course Image
          </label>
          <input
            id="title"
            name="courseTitle"
            type="file"
            
            required
            className="w-full h-11 rounded border-1 py-0  text-gray-900 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 text-lg p-1 "
            style={{border:'1px solid grey',marginBottom:'0'}}
          />
        </div>
        <div className=' px-16'>
         <img src="" alt="" className='w-full h-80 rounded border-1   cover' />
      </div>
      </div>
     
      <div className="md:w-1/2 p-10">
      <div className="mt-2.5 px-16">
      <label htmlFor="description" className="block text-lg font-bold leading-6 text-gray-900" style={{textAlign:''}}>
            Course Price
          </label>
          <input
            id="description"
            name="courseDescription"
            autoComplete="description"
            required
            type='number'
            className="w-full h-11 rounded border-1 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm p-2"
          />
        </div>
        <div className="mt-5 px-16">
          <label htmlFor="description" className="block text-lg font-bold leading-6 text-gray-900" style={{textAlign:''}}>
            Course Category
          </label>
          <select id="countries" className="bg-gray-10 border border-gray-400 text-gray-900 text-sm rounded focus:ring-indigo-500 focus:border-indigo-500 block w-full h-11 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500" style={{marginTop:'0%'}}>
  <option selected>Select a Category</option>
  <option >Web Development</option>
  <option >Data Analytics</option>
  <option >Finance and Marketing</option>
  <option >Health and Fitness</option>
</select>
        </div>
        <button
          type="submit"
          className="w-full md:w-auto justify-center rounded bg-indigo-600 px-3 py-1.5 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-2"
        >
          Create Course
        </button>
      </div>
    </form>
  );
};

export default CourseForm;
