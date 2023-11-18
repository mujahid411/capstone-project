import React from 'react'
import StudentNavBar from './StudentNavBar'
import Test from './Test'
import SingleCourse from './SingleCourse'

const StudentMain = () => {
  return (
    <div>
        <StudentNavBar/>
        <Test/>
        <SingleCourse/>
        <SingleCourse/>
        <SingleCourse/>
        <SingleCourse/>
        <SingleCourse/>
    </div>
  )
}

export default StudentMain