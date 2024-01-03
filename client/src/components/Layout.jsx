import axios from 'axios'
import React, { useState } from 'react'

const Layout = () => {
  const [transcription,setTranscription] = useState('')
  const [loading,setLoading] = useState(false)

 async function handleClick(){
   try {
    setLoading(true)
    let response = await axios.get('http://localhost:5010/api/courses/transcription',{
      headers:{
        apiKey: "99624ecb550d4588855a75686d4fd726"
      }
    })
    // console.log(response.data)
    setLoading(false)
    setTranscription(response.data.transcribedText)
    console.log(transcription,'transcriptonn')
   } catch (error) {
    console.error(error)
    
   }

      
  }
    return (
        // <div className='h-full'>
        //     <div className='hidden  md:flex h-64 w-64  border p-5'>
        //         sidebar

        //     </div>

        // </div>
        <div style={{textAlign:'initial'}} className="grid grid-cols-1 lg:grid-cols-[330px_1fr] gap-4 p-4 pt-0">
        <aside className="hidden lg:block h-full  " style={{height:'100vh',borderRight:'1px solid #d8d7d7'}}>
          <h2 className="text-xl font-semibold pl-2 pt-2">Web Development</h2>
          <div className="flex flex-col gap-4 mt-4">
            <a
              className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
             
            >
              {/* <div className="border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 h-8 w-8 flex items-center justify-center rounded-full bg-green-500 text-white">
                1
              </div> */}
              <div>
                <h4 className="font-semibold">Introduction to Course</h4>
                <small className="text-sm text-gray-500">Duration: 10:00</small>
              </div>
            </a>
            <a
              className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
             
            >
              {/* <div className="border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 h-8 w-8 flex items-center justify-center rounded-full bg-green-500 text-white">
                2
              </div> */}
              <div>
                <h4 className="font-semibold">Chapter 1: Basics</h4>
                <small className="text-sm text-gray-500">Duration: 35:00</small>
              </div>
            </a>
            <a
              className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
             
            >
              {/* <div className="border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 h-8 w-8 flex items-center justify-center rounded-full bg-green-500 text-white">
                3
              </div> */}
              <div>
                <h4 className="font-semibold">Chapter 2: Advanced Topics</h4>
                <small className="text-sm text-gray-500">Duration: 45:00</small>
              </div>
            </a>
          </div>
        </aside>
        <main>
          <div className="rounded-xl overflow-hidden">
            <span className="w-full aspect-video rounded-md bg-muted"></span>
          </div>
          <div className="py-2 grid gap-2 pl-4">
            {/* <div> */}
            <video width="100%" controls  className='p-0 px-0  py-1 sm:p-12 md:p-12 md:py-2 sm:pt-2 sm:pb-2'>
                <source src='https://res.cloudinary.com/drgqcwxq6/video/upload/v1703060840/videos/nf9wwjt8ca7nsjr0bc3z.mp4' type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            <h1 className=" pl-0 text-xl font-semibold tracking-tight sm:pl-12">Chapter 1: Basics</h1>
            {/* <div className="bg-white min-h-[200px] flex items-center justify-center"> */}
      <button 
      onClick={handleClick}
      className="px-6 py-2 font-medium bg-indigo-500 text-white w-fit transition-all md:ml-11 shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
        Transcribe
      </button>
      {
       loading ? <h2>Loading...</h2> : (!loading && transcription) && <div>
       {transcription}
     </div>
      }
    {/* </div> */}
            {/* </div> */}
         
            {/* <p className="text-gray-500 dark:text-gray-400">
              In this video, we will cover the basics of the course content including an introduction to the concepts and
              methodologies.
            </p> */}
          </div>
          <div className="block lg:hidden flex flex-col gap-4 mt-4">
          <h2 className="text-xl font-semibold">Course Title</h2>


            <a
              className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
             
            >
              {/* <div className="border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 h-8 w-8 flex items-center justify-center rounded-full bg-green-500 text-white">
                1
              </div> */}
              <div>
                <h4 className="font-semibold">Introduction to Course</h4>
                <small className="text-sm text-gray-500">Duration: 10:00</small>
              </div>
            </a>
            <a
              className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
             
            >
              {/* <div className="border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 h-8 w-8 flex items-center justify-center rounded-full bg-green-500 text-white">
                2
              </div> */}
              <div>
                <h4 className="font-semibold">Chapter 1: Basics</h4>
                <small className="text-sm text-gray-500">Duration: 35:00</small>
              </div>
            </a>
            <a
              className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
             
            >
              {/* <div className="border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 h-8 w-8 flex items-center justify-center rounded-full bg-green-500 text-white">
                3
              </div> */}
              <div>
                <h4 className="font-semibold">Chapter 2: Advanced Topics</h4>
                <small className="text-sm text-gray-500">Duration: 45:00</small>
              </div>
            </a>
          </div>
        </main>
      </div>
    )
}

export default Layout

