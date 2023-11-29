import React from 'react'
import { useParams } from 'react-router-dom'

const CourseOverview = () => {
    let {courseId} = useParams()
  return (
    <div>CourseOverview</div>
  )
}

export default CourseOverview