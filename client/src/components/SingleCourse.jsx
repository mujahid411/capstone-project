import React from 'react'

const SingleCourse = () => {
    return (

        // <div id='display-course' >
        //     <a className="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]" href="#" >
        //         <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[65%] rounded-t-xl overflow-hidden">
        //             <img className="w-full h-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80" alt="Image Description" />
        //         </div>
        //         <div className="p-2 md:p-2">
        //             <h3 className="text-lg font-bold text-gray-800 dark:text-white">
        //                 Web Development For Beginners
        //             </h3>
        //             <p className="mt-0 text-gray-500 dark:text-gray-400">
        //                 by travery media   </p>
        //             <p className="mt-1 text-gray-500 dark:text-gray-400 bg-indigo-500" style={{ border: '2px solid', height: '4vh', color: 'white' }}>
        //                 499rs    </p>
        //         </div>
        //     </a>
        // </div>
        <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-6">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[65%] rounded-t-xl overflow-hidden">
              <img
                className="w-full h-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
                src={`https://source.unsplash.com/400x400/?web-development-${index}`}
                alt={`Image Description ${index}`}
              />
            </div>
            <div className="p-2 md:p-2">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                Web Development For Beginners
              </h3>
              <p className="mt-0 text-gray-500 dark:text-gray-400">by travery media</p>
              <p
                className=" bg-indigo-500"
                style={{ border: '2px solid', height: '4vh', color: 'white' }}
              >
                ₹499.00
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-6">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[65%] rounded-t-xl overflow-hidden">
              <img
                className="w-full h-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
                src={`https://source.unsplash.com/400x400/?web-development-${index}`}
                alt={`Image Description ${index}`}
              />
            </div>
            <div className="p-2 md:p-2">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                Web Development For Beginners
              </h3>
              <p className="mt-0 text-gray-500 dark:text-gray-400">by travery media</p>
              <p
                className=" bg-indigo-500"
                style={{ border: '2px solid', height: '4vh', color: 'white' }}
              >
                ₹499.00
              </p>
            </div>
          </div>
        ))}
      </div>
      </div>

    )
}

export default SingleCourse