import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchInstructorCourses } from "../../../services/operations/courseDetailsApi";
import IconBtn from "../../common/IconBtn";
import { FaPlus } from "react-icons/fa";
import CoursesTable from "./instructorCourses/CoursesTable";

const MyCourses = () => {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const result = await fetchInstructorCourses(token);
      if (result) {
        setCourses(result);
      }
    };
    fetchCourses();
  }, []);
  return (
    <div>
      <div className="font-inter font-semibold flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <p className="text-richblack-400">
            {`Home / Dashboard / `}{" "}
            <span className="text-yellow-50">Courses</span>
          </p>
          <IconBtn
            text={"Add Course"}
            onclick={() => navigate("/dashboard/add-course")}
          >
            <FaPlus />
          </IconBtn>
        </div>
        <h1 className="section_heading">My Courses</h1>
      </div>

      {courses && <CoursesTable courses={courses} setCourses={setCourses} />}
    </div>
  );
};

export default MyCourses;
