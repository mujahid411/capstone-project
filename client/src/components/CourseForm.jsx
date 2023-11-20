import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CourseForm = () => {
  let { courseId } = useParams();
  const [loading, setLoading] = useState(false);
  const [img, setImg] = useState(null);
  const [video, setVideo] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
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
    if(e.target.name=='courseImage'){
      let uploadFile = async (type) => {
        const data = new FormData();
        data.append("file", type === 'image' ? img : video);
        data.append('upload_preset', type === 'image' ? 'images_preset' : 'videos_preset');
    
        try {
          let cloudName = 'drgqcwxq6';
          let resourceType = type === 'image' ? 'image' : 'video';
          let api = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;
    
          const res = await axios.post(api, data);
          const { secure_url } = res.data;
          console.log(secure_url);
          if (resourceType == 'video') {
            setVideoUrl(secure_url)
            setLoading(false);
          }
          if (resourceType == 'image') {
            setImageUrl(secure_url);
          }
    
          return secure_url;
        } catch (error) {
          console.error(error);
        }
      }
      const handleUpload = async (e) => {
        console.log('in upload');
          try {
          setLoading(true);
    
          let  imgUrl = await uploadFile('image');
    
          let videoUrl = await uploadFile('video');
    
          await axios.post(`/api/videos/upload`, { imgUrl, videoUrl });
    
          setImg(null);
          setVideo(null);
    
          console.log("File upload success!");
          setLoading(false);
          // navigate("/")
        } catch (error) {
          console.error(error);
        }
     
    }
     handleUpload();  
    }
   
  }



  let handleSubmit = (e) => {
    e.preventDefault()
    console.log(courseData);
  }
  //   const handleSelectChange = (e) => {
  //     // const selectedValue = e.target.value;
  //     setCourseData(courseData.courseCategory)
  //     console.log('Selected Option:', courseData.courseCategory);
  //     setSelectedOption(selectedValue);
  //   };

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
    // courseDataFetch();
  }, []);

  return (
    <form className="flex flex-col md:flex-row bg-gray-00" onSubmit={handleSubmit} style={{ minHeight: '100vh', width: '100%' }}>
      <div className="md:w-1/2 p-10">
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
        <div className="mt-2 px-16">
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
          <label htmlFor="courseImage" className="block text-lg font-bold font-medium leading-6 text-gray-900" style={{ textAlign: '' }}>
            Course Image
          </label>
          <input
            id="courseImage"
            name="courseImage"
            type="file"
            value={courseData.courseImage}
            onChange={handleChange}


            required
            className="w-full h-11 rounded border-1 py-0  text-gray-900 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 text-lg p-1  "
            style={{ border: '1px solid grey', marginBottom: '0' }}
          />
        </div>
        <div className=' px-16'>
          <img src={imageUrl} alt="" className=' w-full h-80 rounded border-1 ' />

        </div>
      </div>

      <div className="md:w-1/2 p-10">
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
        <div className="mt-5 px-16">
          <label htmlFor="select" className="block text-lg font-bold leading-6 text-gray-900" style={{ textAlign: '' }}>
            Course Category
          </label>
          <select id="select"
            value={courseData.courseCategory}
            onChange={handleChange}
            name='select' className="bg-gray-10 border border-gray-400 text-gray-900 text-sm rounded focus:ring-indigo-500 focus:border-indigo-500 block w-full h-11 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500" style={{ marginTop: '0%' }}>
            <option selected hidden>Select a Category</option>
            <option >Web Development</option>
            <option >Health and Fitness</option>
            <option >Finance and Marketing</option>
            <option >Data Analytics</option>
            <option >Other</option>
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
