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
    Heading : "Leadership",
    Descripton : "Fully commited to the success company",
  },
  {
    Logo: Logo3,
    Heading : "Leadership",
    Descripton : "Fully commited to the success company",
  },
  {
    Logo: Logo4,
    Heading : "Leadership",
    Descripton : "Fully commited to the success company",
  },
];



const TimelineSection = () => {
  return (
    <div>
      <div className='flex flex-row gap-15 items-center'>

          {/* Left box */}
          <div className='w-[45%] flex flex-col gap-3'>
            {  timeline.map((element,index)=>{
                return (
                    <div className='flex flex-row gap-6 ' key={index}>
                        <div className='w-[50px] h-[50px] bg-white flex items-center'>
                            <img src={element.Logo} alt={"logo"}/>
                        </div>
                        <div>
                          <h2 className='font-semibold text-[18px]'>{element.Heading}</h2>
                          <p className='text-base'>{element.Descripton}</p>
                        </div>
                    </div>
                )
              })}
          </div>

          {/* right Box */}
          <div className='relative shadow-blue-200'>
                <img src={timelineImage} alt={"Timeline"} className='shadow-white object-fit '/>
                <div className='absolute bg-caribbeangreen-700 flex text-white uppercase py-6 left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                  <div className='flex gap-5 items-center border-r border-caribbeangreen-300 px-7'>
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