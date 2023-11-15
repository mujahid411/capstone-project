import React from 'react'
import StudentNavBar from './StudentNavBar'
import Test from './Test'
import DisplayCourse from './DisplayCourse'

const StudentMain = () => {
  return (
    <div>
        <StudentNavBar/>
        <Test/>
        <DisplayCourse/>
        <DisplayCourse/>
        <DisplayCourse/>
        <DisplayCourse/>
        <DisplayCourse/>
    </div>
  )
}

export default StudentMain