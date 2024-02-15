import React, { useEffect, useRef,useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import CourseSubSectionAccordion from "./CourseSubSectionAccordion";


const CourseAccordionBar = ({ isActive, handleActive, course, index }) => {

  const [sectionHeight,setSectionHeight] = useState(0);
  const [selected,setSelected] = useState(false);
  const contentEl = useRef(null);
  useEffect(()=>{
    setSelected(isActive.includes(course._id))
  },[isActive]);

  useEffect(()=>{
    setSectionHeight(selected ? contentEl.current.scrollHeight : 0)
  },[selected]);

  return (
    <div key={index} className=" border border-solid border-richblack-600 bg-richblack-700 overflow-hidden text-richblack-5 last:mb-0">
      <div>
        <div className="flex cursor-pointer items-start justify-between bg-opacity-20 px-7  py-6 transition-[0.3s]"
        onClick={()=>handleActive(course._id)}>
          <div className="flex items-center gap-2">
            <i
              className={
                isActive.includes(course._id) ? "rotate-180" : "rotate-0"
              }
            >
              <AiOutlineDown />
            </i>
            <p>{course?.sectionName}</p>
          </div>
          <div className="space-x-4">
            <span className="text-yellow-25">{`${course.subSection.length || 0} lecture(s)`}</span>
          </div>
        </div>
      </div>
        <div 
        ref={contentEl}
        style={{height:sectionHeight}}
        className="relative h-0 overflow-hidden bg-richblack-900 transition-[height] duration-[0.35s] ease-[ease]"
        >

          <div className=" flex flex-col gap-2 px-7 py-6  text-lg font-semibold">
            {course?.subSection?.map((subSec, idx) => (
              <CourseSubSectionAccordion subSec={subSec} key={idx} />
            ))}
          </div>
        </div>
    </div>
  );
};

export default CourseAccordionBar;
