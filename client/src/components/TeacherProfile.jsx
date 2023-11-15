import axios from 'axios';
import {useState,useEffect} from 'react'

const TeacherProfile = () => {
    let teacherToken = localStorage.getItem('token');
    async function authTeacher(){
      try {
        let response = await axios.get('/api/auth/verify',{
            headers:{
                token:teacherToken
            }
           })
           let email = response.data.email;
           console.log(email)
      } catch (error) {
        console.error(error)
      }
    }

    useEffect(()=>{
        authTeacher()
    },[])

  return (
    <div>
profile
    </div>
  )
}

export default TeacherProfile