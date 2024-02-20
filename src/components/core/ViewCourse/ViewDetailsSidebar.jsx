import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import IconBtn from "../../common/IconBtn";
import { IoIosArrowBack } from "react-icons/io";
import { BsChevronDown } from "react-icons/bs"

const ViewDetailsSidebar = ({ setReviewModal }) => {
  const [activeStatus, setActiveStatus] = useState("");
  const [videobarActive, setVideobarActive] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { sectionId, subSectionId } = useParams();
  const {
    courseSectionData,
    courseEntireData,
    totalNoOfLectures,
    completedLectures,
  } = useSelector((state) => state.viewCourse);

  useEffect(() => {
    (() => {
      if (!courseSectionData.length) {
        return;
      }
      //for highlighting
      const currentSectionIdx = courseSectionData.findIndex(
        (data) => data._id === sectionId
      );
      const currentSubSectionIdx = courseSectionData?.[
        currentSectionIdx
      ]?.subSection?.findIndex((data) => data._id === subSectionId);
      const activeSubSectionId =
        courseSectionData[currentSectionIdx]?.subSection[currentSubSectionIdx]
          ?._id;
      //set current section
      setActiveStatus(courseSectionData[currentSectionIdx]?._id);
      console.log("COURSESECTION DATA", courseSectionData);
      console.log("ACTIVE SUB SECTION ID ", activeSubSectionId);
      //set current SubSection
      setVideobarActive(activeSubSectionId);
    })();
  }, [courseSectionData, courseEntireData, location.pathname]);
  return (
    <>
      <div className="flex h-[calc(100vh-3.5rem)] w-[320px] max-w-[350px] flex-col border-r-[1px] border-r-richblack-700 bg-richblack-800">
        {/* for buttons and headings */}
        <div className="mx-5 flex flex-col items-start justify-between gap-2 gap-y-4 border-b border-richblack-600 py-5 text-lg font-bold text-richblack-25">
          {/* for buttons */}
          <div className="flex w-full items-center justify-between ">
            <div
              className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-richblack-100 p-1 text-richblack-700 hover:scale-90"
              onClick={() => {
                navigate("/dashboard/enrolled-courses");
              }}
              title="back"
            >
              <IoIosArrowBack size={30} />
            </div>

            <div>
              <IconBtn text="Add Review" onclick={() => setReviewModal(true)} />
            </div>
          </div>
          {/* for heading or title */}
          <div className="flex flex-col">
            <p className="text-sm font-semibold text-richblack-500">
              {courseEntireData?.courseName}
            </p>
            <p>
              {completedLectures?.length} / {totalNoOfLectures}
            </p>
          </div>
        </div>

        {/* for sections and subSections */}
        <div className="h-[calc(100vh - 2rem)] overflow-y-auto">
          {courseSectionData.map((section, index) => (
            <div
              className="mt-2 cursor-pointer text-sm text-richblack-5"
              onClick={() => setActiveStatus(section?._id)}
              key={index}
            >
              {/* section */}

              <div className="flex flex-row justify-between bg-richblack-600 px-5 py-4">
                <div className="w-[70%] font-semibold">{section?.sectionName}</div>
                {/* HW- add icon here and handle rotate 180 logic */}
                <div className="flex items-center gap-3">
                <span className={
                    `${activeStatus === section?._id ? "rotate-180" : "rotate-0"} transition-all duration-300`
                }>
                    <BsChevronDown/>
                </span>
                </div>
              </div>

              {/* subSections */}
              <div>
                {console.log("SectionID", section._id)}

                {activeStatus === section?._id && (
                  <div  className="transition-[height] duration-500 ease-in-out">
                    {section?.subSection.map((topic, index) => (
                      <div
                        className={`flex gap-5 p-5 ${
                          videobarActive === topic._id
                            ? "bg-yellow-200 font-semibold text-richblack-800"
                            : "hover:bg-richblack-900 text-white"
                        }`}
                        key={index}
                        onClick={() => {
                          navigate(
                            `/view-course/${courseEntireData?._id}/section/${section?._id}/sub-section/${topic?._id}`
                          );
                          setVideobarActive(topic?._id);
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={completedLectures.includes(topic?._id)}
                        />
                        <span>{topic.title}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ViewDetailsSidebar;
