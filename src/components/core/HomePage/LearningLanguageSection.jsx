import React from 'react'
import HighlightText from './HighlightText'
import know_your_progress from "../../../assets/Images/Know_your_progress.png"
import compare_with_others from "../../../assets/Images/Compare_with_others.png"
import plan_your_lessons from "../../../assets/Images/Plan_your_lessons.png"
import CTAButton from './Button'


const LearningLanguageSection = () => {
  return (
    <div className=' mt-[130px]'>
      <div className='flex flex-col gap-5 items-center'>
            <h1 className='text-4xl font-bold text-center'>
              Your Swiss Knife for
              <HighlightText text={"learning any language"}/>
            </h1>

            <subheading className="text-center text-richblack-600 mx-auto text-base font-medium w-[70%] ">
               Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.
            </subheading>

            <div className='flex flex-row items-center justify-center mt-5'>

                  <img src={know_your_progress} alt="Know your progress Image" className='object-contain -mr-40'></img>
                  <img src={compare_with_others} alt="Compar with Others" className='object-fit ml-7'></img>
                  <img src={plan_your_lessons} alt="Plan form lessons" className='object-fit -ml-36'></img>

            </div>

            <div className='w-fit font-inter '>
              <CTAButton active={true} linkto={"/signup"}>
                    <p>Lear More</p>
              </CTAButton>
            </div>
       </div>
    </div>
  )
}

export default LearningLanguageSection