import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'

const AddChapter = () => {
    let { courseId } = useParams();
    const navigate = useNavigate()
    const [chapterTitle,setChatperTitle] = useState('');
    const [chapterVideo,setChapterVideo] = useState(null);
    const [videoUrl,setVideoUrl] = useState(null);
    const [video, setVideo] = useState(null);
    const [toggleButton,setToggleButton] = useState(false);

   
    let uploadFile = async (type, data) => {
        try {
          let cloudName = 'drgqcwxq6';
          let resourceType = type === 'image' ? 'image' : 'video';
          let api = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;
      
          const res = await axios.post(api, data);
          const { secure_url } = res.data;
      
          if (resourceType === 'video') {
            setVideoUrl(secure_url);
          
          }
      
          return secure_url;
        } catch (error) {
          console.error(error);
        }
      };

      const handleVideoUpload = async (e) => {
        try {
          const newData = new FormData(); 
          newData.append("file", e.target.files[0]);
          newData.append('upload_preset', 'videos_preset');
      
          setVideo(e.target.files[0]); 
      
          const videoUrl = await uploadFile('video', newData);
        //   setCourseData((prevData) => ({ ...prevData, 'courseImage': videoUrl }));
        setChapterVideo(videoUrl)
        console.log(chapterVideo)
          console.log(videoUrl);
        } catch (error) {
          console.error(error);
        }
      };

      const handleSubmit = async (e)=>{
        e.preventDefault()
     try {
        let chapterData = {
            chapterVideo,
            chapterTitle
        }

        let response = await axios.post('/api/chapters/addChapter',{chapterTitle,chapterVideo},{
            
                params:{
                     id:courseId
                }
            
        })
        console.log(response);
     } catch (error) {
        console.error(error);
     }

      } 
      const handleClick = async ()=>{
        navigate(`/courseForm/${courseId}`)
      }

    // console.log(courseId)


    return (
        <>
            <div>
                <div className="flex min-h-full flex-1 flex-col justify-center px-3 py-3 lg:px-8" id='flex-container' >

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm" style={{ fontSize: '1.8rem' }}>
                        <form className="space-y-0"  onSubmit={handleSubmit} >
                            <div>
                                <label htmlFor="chapterTitle" className="block text-sm font-medium leading-6 text-gray-900" style={{ textAlign: 'initial', fontSize: '1.0rem' }}>
                                    Chapter Title
                                </label>
                                <div className="mt-1 mb-6" >
                                    <input
                                        id="chapterTitle"
                                        name="chapterTitle"
                                        type="text"
                                        value={chapterTitle}
                                        required
                                        onChange={(e)=>(setChatperTitle(e.target.value))}
                                        className="block w-full h-11 rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2 mb-0"
                                    />
                                </div>
                            </div>

                            <div>
                                {/* <div className="flex items-center justify-between"> */}
                                <label htmlFor="chapterVideo" className="block text-sm font-bold font-medium leading-6 text-gray-900 mt-0" style={{ textAlign: 'initial', fontSize: '1rem' }}>
                                    Chapter Video
                                </label>
                                <input
                                    id="chapterVideo"
                                    name="chapterVideo"
                                    type="file"
                                    required
                                    onChange={handleVideoUpload}
                                    className="w-full h-11 rounded border-1 py-0  text-gray-900 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 text-lg p-1 mt-1 "
                                    style={{ border: '1px solid grey', marginBottom: '0', backgroundColor: '' }}
                                />
                                {/* </div> */}
                            </div>
                           {videoUrl ? <div className='w-full rounded border-1 h-72'>
                                <video controls autoPlay  style={{border:'1px solid grey',marginTop:'0',borderTop:'0px',margin:'0'}} className='w-full h-full'>
                                <source src={videoUrl} type="video/mp4" />


                                </video>

                            </div> : <div className='w-full h-72'  style={{border:'1px solid grey',marginTop:'0',borderTop:'0px'}}></div>
}
                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-6"
                                    style={{ fontSize: '1.0rem' }}
                                >
                                    Add Chapter
                                </button>
                            </div>
                            
                                   <div>
                                <button
                                    type="button"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-6"
                                    style={{ fontSize: '1.0rem' }}
                                    onClick={handleClick}
                                >
                                    Back to Course
                                </button>
                            </div>
                            

                        </form>


                    </div>
                </div>
            </div>
        </>
    )
}

export default AddChapter