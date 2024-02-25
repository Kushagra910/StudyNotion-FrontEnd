import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import HighlightText from "../components/core/HomePage/HighlightText";
import CTAButton from "../components/core/HomePage/Button";
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";
import TimelineSection from "../components/core/HomePage/TimelineSection";
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection";
import InstructorSection from "../components/core/HomePage/InstructorSection";
import ExploreMore from "../components/core/HomePage/ExploreMore";
import Footer from "../components/common/Footer"
import ReviewSlider from "../components/common/ReviewSlider";



const Home = () => {
  return (
    <div>
      {/* section1 */}
      <section className="relative mt-20 md:mt-16  mx mx-auto flex flex-col items-start md:items-center w-11/12 text-white justify-between max-w-maxContent ">
        <Link to={"/signup"}>
          <div className="group p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-fit ">
            {" "}
            {/*for-button*/}
            <div className="flex items-center gap-2 rounded-full px-4 md:px-10 py-[6px] group-hover:bg-richblack-900 relative ">
              <p className="w-full">Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>
        <h1 className="md:text-center font-semibold text-3xl md:text-4xl  mt-7">
          Empower Your Future with
          <HighlightText text={"Coding Skills"} />
        </h1>
        <div className="w-[90%] self-stretch md:text-center text-lg font-bold mt-4 text-richblack-300">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>
        {/* buttons */}
        <div className="flex flex-row gap-7 mt-8 ml-2 md:ml-0">
          <CTAButton active={true} linkto={"/signup"}>
            {" "}
            {/*Call to action button*/}
            Learn More
          </CTAButton>

          <CTAButton active={false} linkto={"/login"}>
            Book a Demo
          </CTAButton>
        </div>
        {/* video */}

        <div className=" shadow-custom-shadow-2 mr-10  md:mx-3 my-12 relative" >
          <div className="bg-custom-gradient-0 w-full h-full opacity-md blur-xl absolute z-0 top-n8 "></div>
          <video muted loop autoPlay className="transform z-20">
            <source src={Banner} type="video/mp4"></source>
          </video>
        </div>

        {/* Code Section 1 */}
        <div >
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="font-inter text-3xl font-semibold leading-8 tracking-tight">
                Unlock your <HighlightText text={"coding potential "} />
                with our online courses.
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "try it yourself",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{ btnText: "Learn More", linkto: "/login", active: false }}
            codeblock={`<!DOCTYPE html>\n<html>\nhead><>Example</\ntitle><linkrel="stylesheet"href="styles.css">\n/head>\nbody>\nh1><ahref="/">Header</a>\n/h1>\nnav><ahref="one/">One</a><ahref="two/">Two</\na><ahref="three/">Three</a>\n/nav>`}
            codeColor={"text-richblack-50"}
            backgroundGradient={
              "bg-gradient-to-r from-pure-greys-600 via-yellow-400 to-pink-200 "
            }
          />
        </div>

        {/* Code Section 2 */}
        <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="font-inter text-3xl font-semibold leading-8 tracking-tight">
                Start <HighlightText text={"coding in seconds "} />
              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              btnText: "Continue Lesson",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{ btnText: "Learn More", linkto: "/login", active: false }}
            codeblock={`<!DOCTYPE html>\n<html>\nhead><>Example</\ntitle><linkrel="stylesheet"href="styles.css">\n/head>\nbody>\nh1><ahref="/">Header</a>\n/h1>\nnav><ahref="one/">One</a><ahref="two/">Two</\na><ahref="three/">Three</a>\n/nav>`}
            codeColor={"text-richblack-50"}
            backgroundGradient={
              "bg-gradient-to-r from-blue-300 via-blue-500 to-blue-600 "
            }
          />
        </div>
        
        <ExploreMore/>
      </section>

      {/* section2 */}

      <div className="bg-pure-greys-5 text-richblack-700">
        {/* subsection1 */}
        <div className="homepage_bg h-[250px] md:h-[310px] ">
          <div className="w-11/12 max-w-maxContent flex items-center justify-center mt-14 md:mt-0 h-[100%] gap-5 mx-auto">
            <div className="flex flex-row gap-2 md:gap-7 text-white ">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex flex-row gap-1 md:gap-3 items-center">
                  Explore Full Catalog <FaArrowRight />
                </div>
              </CTAButton>

              <CTAButton active={false} linkto={"/signup"}>
                <div>Learn More</div>
              </CTAButton>
            </div>
          </div>
        </div>

        {/* subsection2 */}
        <div className="mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between  md:mt-6">
          <div className="flex flex-col md:flex-row gap-3 md:gap-7 mb-14 mt-10 md:mt-20">
            <div className="font-inter text-3xl md:text-4xl font-semibold w-[98%] md:w-[45%] md:ml-10">
              Get the skills you need for a{" "}
              <HighlightText text={"Job that is in demand"} />
            </div>
            <div className="flex flex-col gap-10 justify-between w-[98%] md:w-[40%] items-start font-inter text-base font-medium">
              <p className="text-[16px] font-inter text-md">
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </p>
              <CTAButton active={true} linkto={"/signup"}>
                <div >Learn More</div>
              </CTAButton>
            </div>
          </div>
          {/* TimeLine Section */}
          <TimelineSection />

          {/* Learing Language Section */}
          <LearningLanguageSection />
        </div>
      </div>
      {/* section3 */}

      <div className=" w-11/12 mx-auto max-w-maxContent flex flex-col items-center justify-between bg-richblack-900 text-white">
              {/* Instructor Section */}
              <InstructorSection/>

              <h2 className="md:text-center text-3xl md:text-4xl font-semibold mt-24">Review from Other Learners</h2>

              {/* Review Slider Section */}
              <ReviewSlider/>
              
      </div>
      {/* footer */}

      <Footer/>
    </div>
  );
};

export default Home;
