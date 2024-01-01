import React from 'react'
import HighlightText from './HighlightText'
import know_your_progress from "../../../assets/Images/Know_your_progress.png"
import compare_with_others from "../../../assets/Images/Compare_with_others.png"
import plan_your_lessons from "../../../assets/Images/Plan_your_lessons.png"
import CTAButton from './Button'


const LearningLanguageSection = () => {
  return (
    <div className=' mt-[130px] mb-10 md:mb-28'>
      <div className='flex flex-col gap-5 items-center'>
            <h1 className=' text-3xl md:text-4xl font-bold md:text-center font-inter'>
              Your Swiss Knife for
              <HighlightText text={"learning any language"}/>
            </h1>

            <subheading className="md:text-center text-richblack-600  mx-auto text-base font-medium w-full md:w-[70%] font-inter ">
               Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.
            </subheading>

            <div className='flex flex-col md:flex-row md:items-center justify-center  mt-5'>

                  <img src={know_your_progress} alt="Know your progress Image" className='object-contain md:-mr-40'></img>
                  <img src={compare_with_others} alt="Compar with Others" className='object-fit md:ml-7'></img>
                  <img src={plan_your_lessons} alt="Plan form lessons" className='object-fit md:-ml-36'></img>

            </div>

            <div className='w-[45%] md:w-fit font-inter '>
              <CTAButton active={true} linkto={"/signup"}>
                    <p>Lear More</p>
              </CTAButton>
            </div>
       </div>
    </div>
  )
}

export default LearningLanguageSection