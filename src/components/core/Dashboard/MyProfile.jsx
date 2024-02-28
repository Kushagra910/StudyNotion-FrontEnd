import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import IconBtn from "../../common/IconBtn";
import { RiEditBoxLine } from "react-icons/ri";

const MyProfile = () => {
  const { user } = useSelector((state) => state.profile);
  const navigate = useNavigate();

  return (
    <div className="w-11/12 md:w-full">
      {/* Heading */}
      <h1 className="mb-6 md:mb-14 text-3xl font-medium text-richblack-5">
        My Profile
      </h1>

      {/* Section - 1 */}
      <div className="flex flex-col md:flex-row items-start gap-3 md:gap-0 md:items-center md:justify-between rounded-md p-8 md:px-12 border-[1px] border-richblack-700 bg-richblack-800 ">
        <div className="flex items-center gap-x-2 md:gap-x-4">
          <img
            src={user?.image}
            alt={`profile-${user?.firstName}`}
            className="aspect-square rounded-full object-cover w-[50px]  md:w-[78px] "
          />
          <div className="space-y-2">
            <p className="text-richblack-5 text-lg font-semibold ">
              {user?.firstName + " " + user?.lastName}
            </p>
            <p className="text-richblack-300 text-sm">{user?.email}</p>
          </div>
        </div>
        <IconBtn
          text="Edit"
          onclick={() => {
            navigate("/dashboard/settings");
          }}
        > <RiEditBoxLine/></IconBtn>
      </div>

      {/* section 2 */}
      <div className="flex flex-col gap-y-10 my-10 p-8 px-12 rounded-md border-[1px] border-richblack-700 bg-richblack-800 ">
        <div className="flex w-full items-center justify-between">
          <p className="text-richblack-5 text-lg font-semibold">About</p>
          <IconBtn
            text="Edit"
            onclick={() => {
              navigate("/dashboard/settings");
            }}
           
          > <RiEditBoxLine/></IconBtn>
        </div>
        <p
          className={`${
            user?.additionalDetails?.about
              ? "text-richblack-5"
              : "text-richblack-400"
          } text-sm font-medium`}
        >
          {" "}
          {user?.additionalDetails?.about ?? "Write Something about Yourself"}
        </p>
      </div>

      {/* section 3 */}
      <div className="my-10 flex flex-col gap-y-10 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 md:px-12">
        <div className="flex gap-3 md:gap-0 items-center w-full justify-between">
          <p className="text-richblack-5 text-lg font-semibold">
            Personal Details
          </p>
          <IconBtn
            text="Edit"
            onclick={() => {
              navigate("/dashboard/settings");
            }}
          >
            <RiEditBoxLine />
          </IconBtn>
        </div>
        <div className="flex flex-col md:flex-row max-w-[500px] justify-between">
          <div className="flex  flex-col gap-y-5">
            <div>
              <p className="mb-2 text-sm text-richblack-600">First Name</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.firstName}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-600">Email</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.email}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-600">Gender</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.additionalDetails?.gender ?? "Add Gender"}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-5">
            <div>
              <p className="mb-2 text-sm text-richblack-600">Last Name</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.lastName}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-600">Phone Number</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.additionalDetails?.contactNumber ?? "Add Contact Number"}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-600">Date Of Birth</p>
              <p className="text-sm font-medium text-richblack-5">{
                user?.additionalDetails?.dateOfBirth ?? "Add Date of Birth"
              }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
