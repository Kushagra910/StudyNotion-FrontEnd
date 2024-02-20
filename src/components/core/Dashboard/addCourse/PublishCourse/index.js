import React from "react";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import IconBtn from "../../../../common/IconBtn";
import { resetCourseState, setStep } from "../../../../../slices/courseSlice";
import { COURSE_STATUS } from "../../../../../data/constants";
import { editCourseDetails } from "../../../../../services/operations/courseDetailsApi";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const PublishCourse = () => {
  const {
    register,
    getValues,
    formState: { errors },
    setValue,
    handleSubmit,
  } = useForm();
  const { course } = useSelector((state) => state.course);
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(()=>{
    if(course?.status === COURSE_STATUS.PUBLISHED){
      setValue("public",true);
    }
  },[]);
  

  const goToCourses = ()=>{
    dispatch(resetCourseState());
    navigate("/dashboard/my-courses")
  }

  const handleCoursePublish = async() => {
    if((course?.status === COURSE_STATUS.PUBLISHED && getValues("public") ===  true) || 
    (course?.status === COURSE_STATUS.DRAFT && getValues("public") === false) ){
      // form not updated so no need to call Api for publish course and just show all courses
      toast.success("Course is Drafted")
      goToCourses();
      return;
    }
    // if form updated
    const formData = new FormData();
    formData.append("courseId",course._id);
    const courseStatus = getValues("public") ? COURSE_STATUS.PUBLISHED : COURSE_STATUS.DRAFT;
    formData.append("status",courseStatus);

    setLoading(true);

    const result = await editCourseDetails(formData,token);
    if(result){
      goToCourses();
    }
    setLoading(false);
  }

  const onSubmit = () => {
    handleCoursePublish();
  };
  const goBack = () => {
    dispatch(setStep(2));
  };
  return (
    <div className="rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6">
      <h1 className="text-2xl font-semibold text-richblack-5">Publish Course</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-6 mb-8">
          <label htmlFor="public" className="inline-flex items-center text-lg">
            {" "}
            <input
              type="checkbox"
              id="public"
              {...register("public", { required: true })}
              className="border-gray-300 h-4 w-4 rounded bg-richblack-500 text-richblack-400 focus:ring-2 focus:ring-richblack-5"
            />{" "}
            <span className="ml-2 text-richblack-400">Make this course as public </span>
          </label>
          {errors.public && (<div>Check box not clicked</div>)}
        </div>

        <div className="flex flex-row-reverse gap-4">
          <button 
          disabled={loading}
          type='button'
          onClick={goBack}
          className="flex items-center rounded-md bg-richblack-500 px-8 py-3">
          Back
          </button>
          <IconBtn disabled={loading} text={"save changes"}/>
        </div>
      </form>
    </div>
  );
};

export default PublishCourse;
