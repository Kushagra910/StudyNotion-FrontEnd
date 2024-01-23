import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getUserEnrolledCourses } from "../../../services/operations/profileApi";
import ProgressBar from "@ramonak/react-progress-bar";

const EnrolledCourses = () => {
  const { token } = useSelector((state) => state.auth);
  const [enrolledCourses, setEnrolledCourses] = useState(null);

  const getEnrolledCourses = async () => {
    try {
      const response = await getUserEnrolledCourses(token);
      setEnrolledCourses(response);
    } catch (err) {
      console.log("Unable to Fetch Enrolled Courses Data");
    }
  };

  useEffect(() => {
    getEnrolledCourses();
  }, []);
  return (
    <div className="text-white">
      <div>Enrolled Courses</div>
      {!enrolledCourses ? (
        <div className="spinner"></div>
      ) : !enrolledCourses.length ? (
        <p>You have not enrolled in any course yet</p>
      ) : (
        <div>
          <div>
            <div>Course Name</div>
            <div>Durations</div>
            <div>Progress</div>
          </div>
          {/* Card Section */}
          {enrolledCourses.map((course, idx) => {
            return (
              <div key={idx}>
                <div>
                  <img src={course.thumbnail} />
                  <div>
                    <p>{course.courseName}</p>
                    {/* conditional rendering on description */}
                    <p>{course.courseDescription}</p>
                  </div>
                </div>
                {/* duration section */}
                <div>{course?.totalDuration}</div>
                {/* Progress Section */}
                <div>
                  <p>Progress:{course.progressPercentage || 0}%</p>
                  {/* progress bar  third party package -> ramonak/progress-bar*/}
                  <ProgressBar
                    completed={course.progressPercentage}
                    height="8px"
                    isLabelVisible={false}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default EnrolledCourses;
