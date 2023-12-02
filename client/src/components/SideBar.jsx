import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import { useState } from "react";
import axios from "axios";

const SideBar = ({teacher,setTeacher}) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(teacher,'sidebar')
  
  return (
    <div className="px-0 py-0 bg-white-900 grid place-content-center">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium px-4 py-2 rounded hover:opacity-90 transition-opacity"
      >
        Update Profile
      </button>
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen}  teacher={teacher} setTeacher={setTeacher}/>
    </div>
  );
};

const SpringModal = ({ isOpen, setIsOpen,teacher,setTeacher }) => {
  const handleClick =async ()=>{
    try {
      setIsOpen(false);
      let id = teacher._id
      // let response = await axios.post('/api/teacher/teacherUpdate',{...teacher},{
      //   params:{
      //     id:id
      //   }
      // })
      // console.log(response.data,'upated')
      // let updatedData = response.data
      // setTeacher(updatedData)
      let response = await axios.post('/api/teacher/teacherUpdate',{...teacher},{
        headers:{
            id:id
        }
       })
      //  let email = response.data.email;
      // let token = response.data.token;
      // console.log(response.data);
      localStorage.setItem('token',response.data.token)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
            <div className="relative z-10">
              <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-indigo-600 grid place-items-center mx-auto">
                <FiAlertCircle />
              </div>
              {/* <h3 className="text-3xl font-bold text-center mb-2">
                ARE YOU SURE YOU WANT TO UPDATE YOUR PROFILE?
              </h3> */}
              <p className="p-10">
              ARE YOU SURE YOU WANT TO UPDATE YOUR PROFILE?

              </p>
              
              <div className="flex gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                >
                  Nah, go back
                </button>
                <button
                  onClick={handleClick}
                  className="bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded"
                >
                  YES!
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SideBar;
