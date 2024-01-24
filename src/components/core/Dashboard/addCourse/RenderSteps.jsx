import React from "react";
import { FaCheck } from "react-icons/fa";
import { useSelector } from "react-redux";
import CourseInformationForm from "./CourseInformation/CourseInformationForm";

const RenderSteps = () => {
  const { step } = useSelector((state) => state.course);
  const steps = [
    {
      id: 1,
      title: "Course Information",
    },
    {
      id: 2,
      title: "Course Builder",
    },
    {
      id: 3,
      title: "Publish",
    },
  ];

  return (
    <div className="">
      {steps.map((item, index) => (
        <div key={item.id} className="flex items-center">
          <div
            className={`${
              step === item.id
                ? "bg-yellow-900 border-yellow-50 text-yellow-50"
                : "border-richblack-700 bg-richblack-800 text-richblack-300 "
            } px-4 py-2 rounded-md mr-2`}
          >
            {step > item.id ? <FaCheck /> : item.id}
          </div>
          {index < steps.length - 1 && <div key={index} className="border-r border-richblack-700 h-4" />}
        </div>
      ))}
      <div>
        {steps.map((item) => (
          <div key={item.id}>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
      {step === 1 && <CourseInformationForm />}
      {/* {step === 2 && <CourseBuilderForm />} */}
      {/* {step === 3 && <PulbishCourse />} */}
    </div>
  );
};

export default RenderSteps;
