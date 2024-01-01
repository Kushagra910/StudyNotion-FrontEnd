import React from "react";
import Instructor from "../../../assets/Images/Instructor.png";
import HighlightText from "./HighlightText";
import CTAButton from "./Button";
import { FaArrowRight } from "react-icons/fa";

const InstructorSection = () => {
  return (
    <div className="mt-24">
      <div className="flex gap-20 items-center justify-between ml-6">
        {/* Left-box */}
        <div className="w-[50%]">
          <img src={Instructor} alt="Instructor" className='shadow-custom-shadow-3'></img>
        </div>

        {/* Right-box */}
        <div className="w-[50%] flex flex-col gap-10">
          <div className="text-4xl font-inter font-semibold w-[50%]">
            Become an <HighlightText text={"Instructor"} />
          </div>
          <p className="font-medium text-[16px] text-richblack-300 font-inter w-[80%]">
            Instructors from around the world teach millions of students on
            StudyNotion. We provide the tools and skills to teach what you love.
          </p>

          <div className="w-fit">
            <CTAButton active={true} linkto={"/signup"}>
              <div className="flex flex-row gap-3 items-center ">
                Start Learnig Today
                <FaArrowRight />
              </div>
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorSection;
