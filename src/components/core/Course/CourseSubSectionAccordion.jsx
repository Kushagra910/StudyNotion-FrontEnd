import React from 'react'
import { HiOutlineVideoCamera } from "react-icons/hi"

const CourseSubSectionAccordion = ({subSec,idx}) => {
  return (
    <div key={idx}>
      <div className='flex justify-between p-2 '>
        <div className='flex items-center gap-2'>
          <span><HiOutlineVideoCamera/></span>
          <p>{subSec.title}</p>
        </div>
      </div>
    </div>
  )
}

export default CourseSubSectionAccordion
