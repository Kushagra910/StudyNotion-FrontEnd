import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourseCategories } from "../../../../../services/operations/courseDetailsApi";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import RequirementField from "./RequirementField";
import { setStep } from "../../../../../slices/courseSlice";
import IconBtn from "../../../../common/IconBtn";

const CourseInformationForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const { course, editCourse } = useSelector((state) => state.course);
  const [loading, setLoading] = useState(false);
  const [courseCategories, setCourseCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      setLoading(true);
      const categories = await fetchCourseCategories();
      if (categories?.length > 0) {
        setCourseCategories(categories);
      }
      setLoading(false);
    };
    if (editCourse) {
      setValue("courseTitle", course.courseName);
      setValue("courseShortDesc", course.courseDescription);
      setValue("coursePrice", course.price);
      setValue("courseTags", course.tag);
      setValue("courseBenefits", course.whatYouWillLearn);
      setValue("courseCategory", course.category);
      setValue("courseRequirements", course.instructions);
      setValue("courseImage", course.thumbnail);
    }
    getCategories();
  }, []);


  const isFormUpdated = () => {
    const currentValues = getValues();
    if(currentValues.courseTitle !== course.courseName || 
      currentValues.courseBenefits !== course.whatYouWillLearn ||
      currentValues.courseCategory._id !== course.category._id ||
      currentValues.coursePrice !== course.courseName ||
      // currentValues.courseTags.toString() !== course.tag.toString() || 
      currentValues.courseShortDesc !== course.courseName ||
      currentValues.courseTitle !== course.courseName ||
      // currentValues.courseImage !== course.thumbnail ||
      currentValues.courseRequirements.toString() !== course.instructions.toString()
      ){
      return true;
    }
    else{
      return false;
    }
  }
  // To handle next button click
  const onSubmit = async (data) => {};
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-md border-richblack-700 bg-richblack-800 p-6 space-y-6"
    >
      <div>
        <label htmlFor="courseTitle">
          Course Title<sup>*</sup>
        </label>
        <input
          id="courseTitle"
          placeholder="Enter Course Title"
          {...register("courseTitle", { required: true })}
          className="w-full text-richblack-800"
        />
        {errors.courseTitle && <span>course title is required**</span>}
      </div>

      <div>
        <label htmlFor="courseShortDesc">
          Course Short Description <sup>*</sup>
        </label>
        <textarea
          id="courseShortDesc"
          placeholder="Enter Description"
          {...register("courseShortDesc", { required: true })}
          className="min-h-[140px] w-full"
        />
        {errors.courseShortDesc && (
          <span>Course Description is required**</span>
        )}
      </div>

      <div className="relative">
        <label htmlFor="coursePrice">
          Course Short Price <sup>*</sup>
        </label>
        <input
          id="coursePrice"
          placeholder="Enter Course Price"
          {...register("coursePrice", { required: true, valueAsNumber: true })}
          className="w-full text-richblack-400 pl-5"
        />
        <HiOutlineCurrencyRupee className="absolute top-[55%]  text-richblack-400" />
        {errors.coursePrice && <span>Course Price is required**</span>}
      </div>
      <div className="text-richblack-400">
        <label htmlFor="courseCategory">
          Course Category<sup>*</sup>
        </label>
        <select
          id="courseCategory"
          defaultValue=""
          {...register("courseCategory", { required: true })}
        >
          <option value="" disabled>
            Choose a Category
          </option>
          {!loading &&
            courseCategories.map((category, index) => (
              <option key={index} value={category?._id}>
                {category?.name}
              </option>
            ))}
        </select>
        {
          errors.courseCategory && (
            <span>Course Category is Required</span>
          )
        }
      </div>

      {/* custom component for handling tags input */}
      {/* <ChipInput
        label="Tags"
        name="courseTags"
        placeholder="Enter tags and press enter"
        register={register}
        errors={errors}
        setValue={setValue}
        getValues={getValues}
      /> */}
      {/* HW-create a component for uploading and showing preview of media */}
      {/* <Upload
        name=
        label=
        register={register}
        errors = {errors}
        setValue={setValue}
      /> */}
      {/* Benefits of the Course */}
      <div>
        <label htmlFor="courseBenefits">Benefit of the course <sup>*</sup></label>
        <textarea
          id="courseBenefits"
          placeholder="Enter Benefits of the course"
          {...register("courseBenefits",{required:true})}
          className="min-h-[130px] w-full"
        />
        {errors.courseBenefits && (
          <span>
            Benefits of the course are required**
          </span>
        )}
      </div>
      <RequirementField
        name="courseRequirements"
        label = "Requirements/Instructions"
        register={register}
        errors={errors}
        setValue={setValue}
        getValues={getValues}
      />

      <div>
        {editCourse && (
          <button 
          onClick={()=>dispatch(setStep(2))}
          className="flex items-center gap-x-2 bg-richblack-200">
            Continue Without Saving
          </button>
        )}  
        <IconBtn
          text={!editCourse ? "Next" : "Save Changes" }
           
        />
      </div>
    </form>

  );
};

export default CourseInformationForm;
