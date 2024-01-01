import React from 'react'
import { HiMiniUsers } from "react-icons/hi2";
import { FaChartSimple } from "react-icons/fa6";

const CourseCard = ({cardData,currentCard,setCurrentCard}) => {
  return (
    <div className='mb-10'>
      <div className={`flex flex-col  justify-between font-inter leading-7 ${currentCard === cardData.heading? "bg-richblack-5 shadow-[20px_20px_0px_0px_yellow]" : "bg-richblack-600" } p-4`}>
        {/* upper box */}
        <div className='flex flex-col gap-3 pb-12 border-b-2 border-dashed border-richblack-25 '>
          <h3 className={`font-semibold text-xl font-inter leading-7 ${currentCard === cardData.heading? "text-richblack-800" : "text-richblack-25" }`}>{cardData.heading}</h3>
          <p className={`text-lg ${currentCard === cardData.heading ? "text-richblack-500" : "text-richblack-300"}`}>{cardData.description}</p>
        </div>
        {/* lower box */}
        <div className={`flex justify-between mt-4 items-baseline  ${currentCard === cardData.heading ? "text-blue-500" : "text-richblack-300" }`}>
          <div className='flex gap-2 items-center '>
          <HiMiniUsers />
          <div>{cardData.level}</div>
          </div>
          <div className='flex gap-2 items-center'>
          <FaChartSimple />
            <div>{`${cardData.lessonNumber} Lessons`}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseCard