import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const CourseForm = () => {
  let { courseId } = useParams();
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  const [img, setImg] = useState('');
  const [video, setVideo] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  let [courseData, setCourseData] = useState({
    courseTitle: '',
    courseDescription: '',
    courseImage: '',
    coursePrice: '',
    courseCategory: '',
    courseChapters: [],
    courseQuiz: [],
  });

  let handleChange = (e) => {
    setCourseData({ ...courseData, [e.target.name]: e.target.value });
  }

  let uploadFile = async (type, data) => {
    try {
      let cloudName = 'drgqcwxq6';
      let resourceType = type === 'image' ? 'image' : 'video';
      let api = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;

      const res = await axios.post(api, data);
      const { secure_url } = res.data;

      if (resourceType === 'image') {
        setImageUrl(secure_url);

      }

      return secure_url;
    } catch (error) {
      console.error(error);
    }
  };


  //  handleUpload(); 

  // const handleUpload = async () => {
  //   try {
  //     console.log('in upload');
  //     setLoading(true);

  //     let imgUrl = await uploadFile('image');
  //     console.log(imgUrl)

  //     // let videoUrl = await uploadFile('video');

  //     await axios.post(`/api/videos/upload`, { imgUrl });

  //     // setImg(null);
  //     // setVideo(null);

  //     console.log("File upload success!");
  //     setLoading(false);
  //     // navigate("/")
  //   } catch (error) {
  //     console.error(error);
  //   }

  // }



  let handleSubmit = (e) => {
    // console.log(courseData)
    e.preventDefault()
    console.log(courseData);
  }
  const handleSelectChange = (e) => {
    setCourseData({ ...courseData, 'courseCategory': e.target.value });
    console.log(courseData);
  };

  const handleImageUpload = async (e) => {
    try {
      const newData = new FormData();
      newData.append("file", e.target.files[0]);
      newData.append('upload_preset', 'images_preset');

      setImg(e.target.files[0]);

      const imageUrl = await uploadFile('image', newData);
      setCourseData((prevData) => ({ ...prevData, 'courseImage': imageUrl }));
      console.log(courseData, 'courseData');
      console.log(imageUrl);
    } catch (error) {
      console.error(error);
    }
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

  const handleAddChapter = async () => {
    if (courseId) {

      navigate(`/addChapter/${courseId}`)
    }
    else {
      let response = await axios.post('/api/courses/createCourse', { ...courseData });
      let courseId = response.data.id;
      navigate(`/addChapter/${courseId}`)

    }

  }



  useEffect(() => {

    courseId ? courseDataFetch() : ''
  }, []);

  return (
    <div id='animation-container' style={{ minHeight: '100vh', width: '100%' }}>
    <form className="flex flex-col md:flex-row bg-gray-00 w-full " onSubmit={handleSubmit} >
      <div className="w-full p-2 pt-2">
        <div className="mt-2 px-16">
          <label htmlFor="courseTitle" className="block text-lg font-bold font-medium leading-6 text-gray-900" style={{ textAlign: '' }}>
            Course Title
          </label>
          <input
            id="courseTitle"
            name="courseTitle"
            type="text"
            value={courseData.courseTitle}
            onChange={handleChange}
            required
            className="w-full h-11 rounded border-1 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm p-2"
          />
        </div>
        <div className="mt-4 px-16">
          <label htmlFor="courseDescription" className="block text-lg font-medium leading-6 text-gray-900" style={{ textAlign: '' }}>
            Course Description
          </label>
          <textarea
            id="courseDescription"
            name="courseDescription"
            value={courseData.courseDescription}
            onChange={handleChange}

            required
            className="w-full h-24 rounded border-1 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm p-2 text-sm"
          ></textarea>
        </div>
        <div className="mt-2 px-16 " >
          <label htmlFor="courseImage" className="block text-lg font-bold font-medium leading-6 text-gray-900 " style={{ textAlign: '' }}>
            Course Image
          </label>
          <input
            id="courseImage"
            name="courseImage"
            type="file"
            value={imageUrl}
            onChange={handleImageUpload}


            // required
            className="w-full h-11  rounded border-1 py-0  text-gray-900 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 text-lg p-1 
            file:bg-indigo-600"
            style={{ border: '1px solid grey', marginBottom: '0' }}
          />
        </div>
        <div className=' px-16'>
          <img src={courseData.courseImage} alt="" className=' w-full h-80 rounded border-1 ' />

        </div>
      </div>

      <div className="md:w-full p-2 pt-2">
        <div className="mt-2.5 px-16">
          <label htmlFor="coursePrice" className="block text-lg font-bold leading-6 text-gray-900" style={{ textAlign: '' }}>
            Course Price
          </label>
          <input
            id="coursePrice"
            name="coursePrice"
            value={courseData.coursePrice}
            onChange={handleChange}
            required
            type='number'
            className="w-full h-11 rounded border-1 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm p-2"
          />
        </div>

        <div className="mt-4 px-16 ">
          <label htmlFor="select" className="block text-lg font-bold leading-6 text-gray-900" style={{ textAlign: '' }}>
            Course Category
          </label>
          <select id="select"
            value={courseData.courseCategory}
            onChange={handleSelectChange}
            name='select' className="bg-gray-10 border border-gray-400 text-gray-900 text-sm rounded focus:ring-indigo-500 focus:border-indigo-500 block w-full h-11 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500" style={{ marginTop: '0%' }}>
            <option selected hidden>Select a Category</option>
            <option >Web Development</option>
            <option >Health and Fitness</option>
            <option >Finance and Marketing</option>
            <option >Data Analytics</option>
            <option >Other</option>
          </select>
        </div>
        <div className="mt-4 px-16">
        <label htmlFor="courseTitle" className="block text-lg font-bold font-medium leading-6 text-gray-900" style={{ textAlign: '' }}>
            Course Chapters
          </label>
          <div className='overflow-x-hidden overflow-y-auto' style={{ border: '1px solid #94a3b8', height: '35vh' }}>

            <div className='flex'>

              <button onClick={handleAddChapter} className="w-full h-11 bg-indigo-500   text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:text-sm p-2 pt-0 " style={{ borderRadius: '0', color: 'white' }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 inline">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Add Chapter</button>
            </div>

            <div className="flex flex-col">
              <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle py-0 ">
                  <div className="overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                      {courseData.courseChapters.map((ele, index) => {
                        return <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                          <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                            {/* <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{index + 1}</td> */}
                            <td className="px-3 py-3 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200 pl-0">{ele.chapterTitle}</td>
                            <td className="px-3 py-3 whitespace-nowrap text-end text-sm font-medium pr-0">
                              <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                              </svg>
                                Edit</button>
                            </td>
                            <td className="px-2 py-2 whitespace-nowrap text-end text-sm font-medium pl-0">
                              <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                              </svg>
                                Delete</button>
                            </td>
                          </tr>
                        </tbody>
                      })
                      }

                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* {courseData.courseChapters.map((ele,index)=>{
             return <div key={index} className='flex w-full h-8 bg-gray-10 border border-gray-400 text-gray-900 text-sm  bg-gray-50' style={{border:'1px solid grey',fontSize:'1.2rem'}}>
                <p className='m-1 p-1 '>{index+1}</p>
                <p className='m-1 p-1 w-1/2 '>{ele.chapterTitle}</p>
                <div className='flex items-center p-3'>
  <button className='flex items-center m-0.5 p-2 ml-8 bg-indigo-500 mt-0.5 p-2.5 text-white  ' style={{fontSize:'1rem',borderRadius:'0%'}}  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="block w-5 h-5 mr-1">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
    </svg>
    Edit
  </button>
</div>
<div className='flex items-center'>
  <button className='flex items-center m-0.5 p-2 ml-8 bg-indigo-500 mt-0.5 p-2.5 text-white ' style={{fontSize:'1rem',borderRadius:'0'}}  >
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>

    Delete
  </button>
</div>

        

              </div>
              
             })} */}



          </div>

        </div>

        <button
          type="submit"
          className=" md:w-auto justify-center rounded bg-indigo-600 px-3 py-1.5 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-2"
        >
          Create Course
        </button>
      </div>
    </form>
    </div>

  );
};

export default CourseForm;
