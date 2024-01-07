import React from 'react'
import Logo1 from '../../../assets/TimeLineLogo/Logo1.svg';
import Logo2 from '../../../assets/TimeLineLogo/Logo2.svg';
import Logo3 from '../../../assets/TimeLineLogo/Logo3.svg';
import Logo4 from '../../../assets/TimeLineLogo/Logo4.svg';
import timelineImage from "../../../assets/Images/TimelineImage.png"

const timeline = [
  {
    Logo: Logo1,
    Heading : "Leadership",
    Descripton : "Fully commited to the success company",
  },
  {
    Logo: Logo2,
    Heading : "Responsibility",
    Descripton : "Students will always be our top priority",
  },
  {
    Logo: Logo3,
    Heading : "Flexibility",
    Descripton : "The ability to switch is an important skills",
  },
  {
    Logo: Logo4,
    Heading : "Solve the problem",
    Descripton : "Code your way to a solution",
  },
];



const TimelineSection = () => {
  return (
    <div>
      <div className='flex flex-col md:flex-row gap-16 items-center '>

          {/* Left box */}
          <div className='w-[100%] md:w-[45%] flex flex-col gap-8'>
            {  timeline.map((element,index)=>{
                return (
                    <div className='flex flex-row gap-4 md:gap-6 ' key={index}>
                        <div className='w-[50px] h-[50px] flex items-center justify-center rounded-full shadow-md shadow-blue-200'>
                            <img src={element.Logo} alt={"logo"}/>
                        </div>
                        <div>
                          <h2 className='font-semibold text-[18px] font-inter  leading-7'>{element.Heading}</h2>
                          <p className='text-sm md:text-base'>{element.Descripton}</p>
                        </div>
                    </div>
                )
              })}
          </div>

          {/* right Box */}
          <div className='relative  z-10 '>
                <div className='bg-blue w-full  rounded-full shadow-4xl bg-blue-200 blur-2xl md:blur-3xl z-0 top-12 h-2/3 absolute '></div>
                <img src={timelineImage} alt={"Timeline"} className='shadow-white relative object-fit z-10' loading='lazy'/>
                <div className='absolute bg-caribbeangreen-700 flex  flex-col md:flex-row text-white uppercase py-6 left-[50%] translate-x-[-50%] translate-y-[-50%]  z-20 gap-10 md:gap-0'>
                  <div className='flex gap-5 items-center border-r border-caribbeangreen-300 px-7 '>
                    <p className='text-3xl font-bold'>10</p>
                    <p className='text-caribbeangreen-300 text-sm'>Years of Experience</p>
                  </div>
                  <div className='flex gap-5 items-center px-7 '>
                     <p className='text-3xl font-bold'>250</p>
                      <p className='text-caribbeangreen-300 text-sm'>Types of courses</p>
                  </div>
                </div>
          </div>
      </div>
    </div>
  )
}

export default TimelineSection