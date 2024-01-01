import React from "react";
import CTAButton from "./Button";
import { FaArrowRight } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";


const CodeBlocks = ({
  position,
  heading,
  subheading,
  ctabtn1,
  ctabtn2,
  codeblock,
  backgroundGradient,
  codeColor,
}) => {
  return (
    <div className={`flex flex-col md:flex-row ${position} my-8 md:my-20 justify-between mx-auto gap-10`}>
      {/* section1 */}
      <div className="w-[95%] md:w-[40%] flex items-stretch md:items-center flex-col gap-8 font-inter">
        {heading}
        <div className="text-richblack-300 font-inter text-base font-bold leading-6">{subheading}</div>
        <div className="flex gap-7 mt-7">
          <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
            <div className="flex gap-2 items-center">
              {ctabtn1.btnText}
              <FaArrowRight />
            </div>
          </CTAButton>

          <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>
            {ctabtn2.btnText}
          </CTAButton>
        </div>
      </div>
      {/* section2  Type Animation*/}
      <div className="h-fit flex text-[10px]  py-4 w-[350px] md:w-[500px]  bg-richblack-800 opacity-100  relative font-mono">
        <div className={`w-[342.95px] h-[257.05px] ${backgroundGradient}rounded-full absolute top-[-15px] left-[-45px] blur-xl z-0 opacity-50`} ></div>
        <div className="text-center flex flex-col w-[7%] md:w-[10%] text-xs md:text-sm leading-5 text-richblack-200 relative font-inter font-bold self-stretch  z-20">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
          <p>11</p>
        </div>
        <div className={`w-[90%] flex flex-col gap-1 md:gap-2 leading-5 text-xs md:text-sm font-bold font-mono ${codeColor} pr-2 relative z-20 `}>
          <TypeAnimation
            sequence={[codeblock , 5000, ""]}
            repeat={Infinity}
            cursor={true}
            omitDeletionAnimation={true}
            style={
              {whiteSpace : "pre-line",
              direction:"block"}
            }
          />
        </div>
      </div>

    </div>
  );
};

export default CodeBlocks;
