import React, { useEffect, useState } from 'react'
import TeacherNavBar from './TeacherNavBar'
import Test from './Test'
import SingleCourse from './SingleCourse'
import axios from 'axios'

const TeacherMain = () => {
  const [home,setHome] = useState(true)
  const [profile,setProfile] = useState(false);
    const [createCourse,setCreateCourse] = useState(false);
    const [mycourses,setCourses] = useState(false);
  let token = localStorage.getItem('token');
  async function authTeacher(){
    try {
      let response = await axios.get('/api/auth/verify',{
          headers:{
              token:token
          }
         })
        //  let email = response.data.email;
        //  console.log(email)
        console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(()=>{
      authTeacher()
  },[])

  return (
    <div >
        <TeacherNavBar profile={profile} home={home} mycourses={mycourses} createCourse={createCourse} />
        <Test/>
        <SingleCourse/>
        <SingleCourse/>
        <SingleCourse/>
        <SingleCourse/>
        <SingleCourse/>
    </div>
  )
}

export default TeacherMain