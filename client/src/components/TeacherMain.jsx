import React from 'react'
import TeacherNavBar from './TeacherNavBar'
import Test from './Test'
import SingleCourse from './SingleCourse'

const TeacherMain = () => {
  return (
    <div >
        <TeacherNavBar/>
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