import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../Context'
import SingleCourse from './SingleCourse'
import TeacherNavBar from './TeacherNavBar'

const MyCourses = () => {
    const {user} = useGlobalContext()
    let [allCourses,setAllCourses]= useState([])
    const [profile,setProfile] = useState(false);
    const [home,setHome] = useState(false);
    const [createCourse,setCreateCourse] = useState(false);
    const [mycourses,setCourses] = useState(true);
    // async function getUserId(){
    //     let id = await user._id
    //     console.log(id,'userid')
    // }
    let id = user._id
    console.log(user._id)


    useEffect(()=>{
        // getUserId()
        async function myCourses(){
            try {
                let response = await axios.get('/api/teacher/mycourses',{
                    params:{
                        id
                    }
                })
                console.log(response.data)
                setAllCourses(response.data)
            } catch (error) {
                console.error(error)
            }
        }
        myCourses()
    },[id])
    if(allCourses.length>10 || allCourses.length===0){
      return <div>
        <h2>Loading...</h2>
      </div>
    }
  return (
    <div>
        <TeacherNavBar profile={profile} home={home} mycourses={mycourses} createCourse={createCourse}/>
 <h1 style={{textAlign:'initial',paddingLeft:'2rem',paddingTop:'1rem'}}>Your Courses</h1>
 <SingleCourse allCourses={allCourses} setAllCourses={setAllCourses} />
    </div>
  )
}

export default MyCourses