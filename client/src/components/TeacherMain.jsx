import React from 'react'
import TeacherNavBar from './TeacherNavBar'
import Test from './Test'
import DisplayCourse from './DisplayCourse'

const TeacherMain = () => {
  return (
    <div >
        <TeacherNavBar/>
        <Test/>
        <DisplayCourse/>
        <DisplayCourse/>
        <DisplayCourse/>
        <DisplayCourse/>
        <DisplayCourse/>
    </div>
  )
}

export default TeacherMain