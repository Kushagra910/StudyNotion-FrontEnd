import React from "react";
import ContactUsForm from "../components/contactPage/ContactUsForm";
import Footer from "../components/common/Footer";
import ReviewSlider from "../components/common/ReviewSlider";

const Contact = () => {

  const data = [
    {
      logo:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
    </svg>,
      title:"Chat on us",
      description1:"Our friendly team is here to help.",
      description2:"@mail address"
    },
    {
      logo:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path fill-rule="evenodd" clipRule="evenodd" d="M12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25ZM8.54688 4.50525C5.71517 5.8121 3.75 8.67655 3.75 12C3.75 16.5563 7.44365 20.25 12 20.25C16.3141 20.25 19.8548 16.9387 20.2191 12.7191L19.7582 12.2582C19.5872 12.0872 19.4449 11.8897 19.3367 11.6734L18.2567 9.5133C18.1304 9.26078 17.7939 9.20616 17.5942 9.4058C17.3818 9.61824 17.0709 9.69881 16.782 9.61627L15.5091 9.25259C15.0257 9.11447 14.524 9.40424 14.402 9.892C14.3109 10.2566 14.4588 10.6392 14.7715 10.8476L15.3582 11.2388C15.9489 11.6326 16.0317 12.4684 15.5297 12.9703L15.3295 13.1705C15.1186 13.3815 15 13.6676 15 13.966V14.3768C15 14.7846 14.8892 15.1847 14.6794 15.5344L13.3648 17.7254C12.9834 18.3611 12.2965 18.75 11.5552 18.75C10.9724 18.75 10.5 18.2776 10.5 17.6948V16.5233C10.5 15.6033 9.93989 14.7759 9.08565 14.4343L8.43151 14.1726C7.44978 13.7799 6.87393 12.7566 7.04776 11.7136L7.05479 11.6714C7.1012 11.393 7.19959 11.1257 7.34482 10.8837L7.43423 10.7347C7.92346 9.91928 8.87244 9.49948 9.80485 9.68597L10.9827 9.92153C11.5574 10.0365 12.124 9.69096 12.285 9.12744L12.4935 8.39774C12.6423 7.87721 12.3991 7.32456 11.9149 7.08245L11.25 6.75L11.159 6.84099C10.7371 7.26295 10.1648 7.5 9.56805 7.5H9.38712C9.13927 7.5 8.90098 7.59905 8.72572 7.7743C8.44225 8.05778 8.00817 8.12907 7.64961 7.94979C7.16435 7.70716 6.98836 7.10278 7.26749 6.63757L8.54688 4.50525Z" fill="#AFB2BF"/>
    </svg>,
      title:"Visit us",
      description1:"Come and say hello at our office HQ.",
      description2:"Here is the location/ address"
    },
    {
      logo:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path fill-rule="evenodd" clipRule="evenodd" d="M1.5 4.5C1.5 2.84315 2.84315 1.5 4.5 1.5H5.87163C6.732 1.5 7.48197 2.08556 7.69064 2.92025L8.79644 7.34343C8.97941 8.0753 8.70594 8.84555 8.10242 9.29818L6.8088 10.2684C6.67447 10.3691 6.64527 10.5167 6.683 10.6197C7.81851 13.7195 10.2805 16.1815 13.3803 17.317C13.4833 17.3547 13.6309 17.3255 13.7316 17.1912L14.7018 15.8976C15.1545 15.2941 15.9247 15.0206 16.6566 15.2036L21.0798 16.3094C21.9144 16.518 22.5 17.268 22.5 18.1284V19.5C22.5 21.1569 21.1569 22.5 19.5 22.5H17.25C8.55151 22.5 1.5 15.4485 1.5 6.75V4.5Z" fill="#AFB2BF"/>
    </svg>,
      title:"Call us",
      description1:"Mon - Fri From 8am to 5pm",
      description2:"+123 456 7890"
    }
  ]
  return (
    <div>
      <div className="w-11/12 max-w-maxContent mx-auto mt-20">
        {/* section 1 */}
        <div className="flex flex-col md:flex-row justify-center gap-24">
          {/* Left column */}
          <div className="font-inter ">
            {
              data.map((ele,ind)=>{
                return (
                  <div key={ind} className="self-stretch flex justify-start gap-3 bg-richblack-800 p-8 rounded-sm">
                    <div className=" text-richblack-5" >{ele.logo}</div>
                    <div className="flex flex-col"> 
                      <div className="text-lg font-semibold text-richblack-5">{ele.title}</div>
                      <div className="text-richblack-200 font-medium text-base">{ele.description1}</div>
                      <div className="text-richblack-200 font-medium text-base">{ele.description2}</div>
                    </div>
                  </div>
                );
              })
            }
          </div>
          {/* Right column */}
          <div className="self-stretch flex flex-col gap-10 p-12 rounded-xl border-style justify-start md:w-[55%] font-inter">
            <h1 className="md:text-4xl font-semibold leading-10 text-richblack-5">Got a Idea? We’ve got the skills. Let’s team up</h1>
            <p className="text-richblack-300 text-base font-medium">Tell us more about yourself and what you’ve got in mind.</p>
            <div className="text-white"><ContactUsForm/></div>
          </div>
        </div>
        {/* section - 2 */}
        <section className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        <div className="text-center text-4xl font-semibold mt-8">
          Reviews From Other Learners
        </div>
                  {/* <ReviewSlider/> */}
                  <ReviewSlider/>
      </section>
      </div>
      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
