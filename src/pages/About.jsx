import React from "react";
import HighlightText from "../components/core/HomePage/HighlightText";
import BannerImage1 from "../assets/Images/aboutus1.webp";
import BannerImage2 from "../assets/Images/aboutus2.webp";
import BannerImage3 from "../assets/Images/aboutus3.webp";
import Quote from "../components/core/AboutPage/Quote";
import FoundingStory from "../assets/Images/FoundingStory.png";
import Stats from "../components/core/AboutPage/Stats";
import LearningGrid from "../components/core/AboutPage/LearningGrid";
import ContactFormSection from "../components/core/AboutPage/ContactFormSection";
import Footer from "../components/common/Footer";

const About = () => {
  return (
    <div className="text-white  font-inter  ">
      {/* Section-1 */}
      <div className="bg-richblack-800 ">
        <section className=" w-11/12 max-w-maxContent mx-auto flex flex-col relative lg:h-[618px] lg:p-[80px_120px_0px_120px] lg:gap-[52px] shrink-0">
          <div className="text-richblack-200 mx-auto font-medium">About Us</div>
          <header className="flex flex-col self-stretch lg:w-[913px] lg:p-[0px_52px] gap-4 mx-auto">
            <h1 className="lg:text-4xl font-semibold lg:leading-[44px] lg:tracking-tight flex flex-col items-center">
              Driving Innovation in Online Education for a{" "}
              <HighlightText text={"Brighter Future"} />
            </h1>
            {/* para */}
            <p className="text-richblack-300 text-center text-base font-medium">
              Studynotion is at the forefront of driving innovation in online
              education. We're passionate about creating a brighter future by
              offering cutting-edge courses, leveraging emerging technologies,
              and nurturing a vibrant learning community.
            </p>
          </header>
          <div className="flex gap-x-5 absolute -bottom-16  translate-x-[-10%]">
            <img src={BannerImage1} alt="1" />
            <img src={BannerImage2} alt="2" />
            <img src={BannerImage3} alt="3" />
          </div>
        </section> 
      </div>

      {/* Section-2 */}
      <section className=" mx-auto border-b border-richblack-700">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
        <div className="h-[100px] "></div>
          <Quote />
        </div>
      </section>

      {/* Section-3 */}
      <section className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-8 text-richblack-500">
          {/* Founding Story Div */}
          <div  className="flex flex-col items-center gap-10 md:flex-row justify-between">
            {/* left sub-part */}
            <div className="flex md:w-[50%] flex-col gap-10 my-20">
              <h1  className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent md:w-[70%]">Our Founding Story</h1>
              <p className="text-base font-medium text-richblack-300 md:w-[95%]">
                Our e-learning platform was born out of a shared vision and
                passion for transforming education. It all began with a group of
                educators, technologists, and lifelong learners who recognized
                the need for accessible, flexible, and high-quality learning
                opportunities in a rapidly evolving digital world.
              </p>
              <p className="text-base font-medium text-richblack-300  md:w-[95%]">
                As experienced educators ourselves, we witnessed firsthand the
                limitations and challenges of traditional education systems. We
                believed that education should not be confined to the walls of a
                classroom or restricted by geographical boundaries. We
                envisioned a platform that could bridge these gaps and empower
                individuals from all walks of life to unlock their full
                potential.
              </p>
            </div>
            {/* right sub-part */}
            <div>
              <img src={FoundingStory} alt="Founding Story" />
            </div>
          </div>
          {/* Vision & Missino div */}
          <div className="flex flex-col items-center md:gap-10 md:flex-row justify-between">
            {/* left sub part */}
            <div className="my-24 flex md:w-[45%] flex-col gap-10">
              <p className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent md:w-[70%] ">Our Vision</p>
              <p className="text-base font-medium text-richblack-300 md:w-[95%]">
                With this vision in mind, we set out on a journey to create an
                e-learning platform that would revolutionize the way people
                learn. Our team of dedicated experts worked tirelessly to
                develop a robust and intuitive platform that combines
                cutting-edge technology with engaging content, fostering a
                dynamic and interactive learning experience.
              </p>
            </div>
            {/* right sub part  */}
            <div className="my-24 flex md:w-[45%] flex-col gap-10">
              <p className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold md:w-[70%] ">Our Mission</p>
              <p className="text-base font-medium text-richblack-300 md:w-[95%]">
                our mission goes beyond just delivering courses online. We
                wanted to create a vibrant community of learners, where
                individuals can connect, collaborate, and learn from one
                another. We believe that knowledge thrives in an environment of
                sharing and dialogue, and we foster this spirit of collaboration
                through forums, live sessions, and networking opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section - 4 */}
      <Stats />

      {/* Section - 5 */}
      <section className="flex flex-col items-center justify-between gap-5 mb-[150px] w-11/12 max-w-maxContent mx-auto mt-20">
        <LearningGrid />
        <ContactFormSection />
      </section>

      {/* Section - 6 */}
      <section className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        <div className="text-center text-4xl font-semibold mt-8">
          Reviews From Other Learners
          {/* <ReviewSlider/> */}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
