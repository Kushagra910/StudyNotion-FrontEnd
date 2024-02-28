import React, { useState } from "react";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/core/Dashboard/Sidebar";

const Dashboard = () => {
  const { loading: authLoading } = useSelector((state) => state.auth);
  const { loading: profileLoading } = useSelector((state) => state.profile);
  const [isOpen,setOpen] = useState(false);

  if (profileLoading || authLoading) {
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="spinner"></div>
      </div>
    );
  }
  return (
    <div className="relative flex flex-col md:flex-row min-h-[calc(100vh-3.5rem)] md:mt-0 z-20">
      <button onClick={() => setOpen(!isOpen)} className=" mt-5 absolute right-10 md:right-auto md:left-6 top-6 md:top-0 mb-4  bg-richblack-600 hover:bg-richblack-300 text-richblack-50 transition-all duration-300 ease-linear p-2 rounded-lg "><BsReverseLayoutTextSidebarReverse size={26}/></button>
      {isOpen &&
        <Sidebar/>}
      <div className="h-[calc(100vh-3.5rem) overflow-auto flex-1">
        <div className="mx-auto w-11/12 max-w-[1000px]  py-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
