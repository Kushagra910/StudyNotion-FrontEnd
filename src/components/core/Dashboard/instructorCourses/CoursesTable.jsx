import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table, Thead, Tr, Tbody, Th, Td } from "react-super-responsive-table";
import { COURSE_STATUS } from "../../../../data/constants";
import ConfirmationModal from "../../../common/ConfirmationModal";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import {
  deleteCourse,
  fetchInstructorCourses,
} from "../../../../services/operations/courseDetailsApi";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { useNavigate } from "react-router-dom";
import { HiMiniCheckCircle } from "react-icons/hi2";
import { HiMiniClock } from "react-icons/hi2";

const CoursesTable = ({ courses, setCourses }) => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(null);
  const navigate = useNavigate();

  const handleCourseDelete = async (courseId) => {
    setLoading(true);
    await deleteCourse({ courseId: courseId }, token);
    const result = await fetchInstructorCourses(token);
    if (result) {
      setCourses(result);
    }
    setConfirmationModal(null);
    setLoading(false);
  };
  return (
    <div className="text-white mt-10">
      <Table className="border border-richblack-600">
        <Thead>
          <Tr className="flex justify-between items-center text-richblack-400 p-3 border-b border-richblack-600">
            <Th> Courses</Th>
            <Th className="flex justify-between gap-6">
              <Th> Duration</Th>
              <Th>Price</Th>
              <Th> Actions</Th>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {courses.length === 0 ? (
            <Tr>
              <Td>No Courses Available</Td>
            </Tr>
          ) : (
            courses?.map((course) => (
              <Tr
                className="flex justify-between border-richblack-800 p-8"
                key={course._id}
              >
                <Td className="flex gap-x-4">
                  <img
                    src={course?.thumbnail}
                    className="h-[150px] w-[220px] rounded-lg object-cover"
                  />
                  <div className="flex flex-col gap-2 font-inter max-w-[400px]">
                    <p className="font-semibold text-lg text-richblack-5">
                      {course.courseName}
                    </p>
                    <p className="font-normal text-sm text-richblack-100">
                      {course.courseDescription}
                    </p>
                    <p clasName="font-normal text-sm text-richblack-50">
                      Created:
                    </p>
                    {course.status === COURSE_STATUS.DRAFT ? (
                      <span className="text-pink-50 py-2 px-4 max-w-fit bg-richblack-600 rounded-full flex items-center gap-1">
                        <HiMiniClock />
                        <span>Drafted</span>
                      </span>
                    ) : (
                      <span className="text-yellow-50 py-2 px-4 max-w-fit bg-richblack-600 rounded-full flex items-center gap-1">
                        {" "}
                        <HiMiniCheckCircle /> <span>Published</span>
                      </span>
                    )}
                  </div>
                </Td>
                <Td className="flex gap-5 items-center">
                  <Td className='text-richblack-300'>{course.price}</Td>
                  <Td className="flex gap-1 items-center text-richblack-300">
                    <button
                      disabled={loading}
                      onClick={() =>
                        navigate(`/dashboard/edit-course/${course._id}`)
                      }
                    >
                      <FaEdit/>
                    </button>
                    {"/"}
                    <button
                      disabled={loading}
                      onClick={() => {
                        setConfirmationModal({
                          text1: "Do you want to delete this course",
                          text2:
                            "All the data related to this course will be deleted",
                          btn1Text: "Delete",
                          btn2Text: "Cancel",
                          btn1Handler: !loading
                            ? () => handleCourseDelete(course._id)
                            : () => {},
                          btn2Handler: !loading
                            ? () => setConfirmationModal(null)
                            : () => {},
                        });
                      }}
                    >
                      <MdDeleteForever/>
                    </button>
                  </Td>
                </Td>
              </Tr>
            ))
          )}
        </Tbody>
      </Table>

      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </div>
  );
};

export default CoursesTable;
