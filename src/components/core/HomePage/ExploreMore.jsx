import React, { useState } from 'react'
import {HomePageExplore} from "../../../data/homepage-explore";
import HighlightText from './HighlightText';
import CourseCard from './CourseCard';

const tabsName = [
  "Free",
  "New to coding",
  "Most popular",
  "Skill paths",
  "Career paths"
];

const ExploreMore = () => {

  const [currentTab,setCurrentTab] = useState(tabsName[0]);
  const [courses,setCourses] = useState(HomePageExplore[0].courses);
  const [currentCard,setCurrentCard] = useState(HomePageExplore[0].courses[0].heading);

  const setMyCards = (value)=>{
    setCurrentTab(value);
    const result = HomePageExplore.filter((course)=>course.tag === value);
    setCourses(result[0].courses);
    setCurrentCard(result[0].courses[0].heading);
  }

  return (
    <div className='relative w-full'>
      <div className='text-4xl font-semibold text-center'>
        Unlock the <HighlightText text={"Power of Code"}/>
      </div>
      <p className='text-lg text-center mt-3 font-semibold text-richblack-300'>
        Learn to Build Anything You Can Imagine
      </p>
      <div className='flex w-fit mx-auto flex-row justify-center items-center rounded-full bg-richblack-800 mt-5 mb-5 border-richblack-100 px-2  py-1'>
        {
          tabsName.map((element,index)=>{
            return (
              <div className={`text-[16px] flex items-center gap-2 
              ${currentTab === element ? "bg-richblack-900 text-richblack-5 font-medium" : "text-richblack-200"} rounded-full transition-all duration-200 cursor-pointer 
              hover:bg-richblack-500 hover:text-richblack-5 px-7 py-2`} key={index}
              onClick={()=>{setMyCards(element)}}>
                {element}
              </div>
            )
          })
        }
      </div>
      <div className='lg:h-[240px]'></div>

      {/* course card collection */}
      <div  className='absolute -bottom-16 flex gap-10 justify-between w-full  '>
        {
          courses.map((element,index) => {
            return (
              <CourseCard key={index} cardData={element} currentCard={currentCard} setCurrentCard={setCurrentCard} />
            )
          })
        }
      </div>
    </div>
  )
}

export default ExploreMore