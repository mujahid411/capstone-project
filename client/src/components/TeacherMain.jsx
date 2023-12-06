import React, { useEffect, useState } from 'react'
import TeacherNavBar from './TeacherNavBar'
import Test from './Test'
import SingleCourse from './SingleCourse'
import axios from 'axios'
import { useGlobalContext } from '../Context'

const TeacherMain = () => {
  const {user,setUser} = useGlobalContext();
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
  const [allCourses, setAllCourses] = useState([]);

  let getCourses = async () => {
    try {
      let response = await axios.get('/api/courses/getAllcourses');
      // console.log(response.data);
      let arr = response.data;
      arr.reverse();
      setAllCourses(arr);
      allCourses.reverse()
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <div >
        <TeacherNavBar profile={profile} home={home} mycourses={mycourses} createCourse={createCourse} />
        <Test/>
        <SingleCourse allCourses={allCourses} setAllCourses={setAllCourses}/>
        <SingleCourse allCourses={allCourses} setAllCourses={setAllCourses}/>
        <SingleCourse allCourses={allCourses} setAllCourses={setAllCourses}/>
        <SingleCourse allCourses={allCourses} setAllCourses={setAllCourses}/>
    </div>
  )
}

export default TeacherMain