import React from "react";
import { useState } from "react";
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai';
import {toast} from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {ACCOUNT_TYPE} from "../../../data/constants"
import { setSignupData } from "../../../slices/authSlice";
import { sendOtp } from "../../../services/operations/authApi";
import Tab from "../../common/Tab";

const SignupForm = () => {

    // data to pass to Tab component
    const tabData = [
      {
        id: 1,
        tabName: "Student",
        type: ACCOUNT_TYPE.STUDENT,
      },
      {
        id: 2,
        tabName: "Instructor",
        type: ACCOUNT_TYPE.INSTRUCTOR,
      },
    ]

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    confirmPassword: "",
  });

  const [accountType,setAccountType] = useState(ACCOUNT_TYPE.STUDENT);

  const { password, confirmPassword } = formData

  // Handling input fields, when some value changes
  const changeHandler = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(password!==confirmPassword){
      toast.error("Passwords Do not Match")
      return ;
    }
    // toast.success("Account Created");

    // ACUUMULATING DATA
    const signupData = {
      ...formData,
      accountType
    }
    //set the signup data to state so that it can be used after OTP verification
    dispatch(setSignupData(signupData));

    // Send OTP to user for verification
    dispatch(sendOtp(formData.email, navigate));
    
    // Reset
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    setAccountType(ACCOUNT_TYPE.STUDENT);



  }

  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  return (
    <div>
      {/* <div className="flex bg-richblack-800 p-1 gap-x-1 my-4 rounded-full max-w-max">
        <button 
        className={`${accountType === "student" ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
         onClick = {() => setAccountType("student")}
        >Student</button>
        <button 
        className={`${accountType === "instructor" ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
         onClick={() => setAccountType("instructor")}
        >Instructor</button>
      </div> */}

      <Tab accountType={accountType} setAccountType={setAccountType} tabData={tabData}></Tab>

      <form onSubmit={submitHandler}>
        <div className="flex gap-x-4 mt-[10px[">
          <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 mt-1 leading-[1.375rem]'>
              First Name <sup className='text-pink-200'>*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              onChange={changeHandler}
              placeholder="Enter First Name"
              value={formData.firstName}
              className='bg-richblack-800 rounded-lg w-full p-[12px] shadow-[0px_2px_2px_-1px_white] text-white'
            />
          </label>

          <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 mt-1 leading-[1.375rem]'>
              Last Name <sup className='text-pink-200'>*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              onChange={changeHandler}
              placeholder="Enter Last Name"
              value={formData.lastName}
              className='bg-richblack-800 rounded-lg w-full p-[12px] shadow-[0px_2px_2px_-1px_white] text-white'
            />
          </label>
        </div>

        <div className="mt-[5px]">
        <label className='w-full relative'>
          <p className='text-[0.875rem] text-richblack-5 mt-1 leading-[1.375rem]'>
            Email Address <sup className='text-pink-200'>*</sup>
          </p>
          <input
            required
            type="email"
            name="email"
            onChange={changeHandler}
            placeholder="Enter Email Address"
            value={formData.email}
            className='bg-richblack-800 rounded-lg w-full p-[12px] shadow-[0px_2px_2px_-1px_white] text-white'
          />
        </label>

        </div>
        <div className="flex gap-x-4 mt-2">

          <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 mt-1 leading-[1.375rem]'>
              Create Password <sup className='text-pink-200'>*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={changeHandler}
              placeholder="Enter Password"
              value={formData.password}
              className='bg-richblack-800 rounded-lg w-full p-[12px] shadow-[0px_2px_2px_-1px_white] text-white'
            />
            <span
            className='absolute right-3 top-[38px] cursor-pointer '
             onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> : <AiOutlineEye fontSize={24} fill='#AFB2BF'/>}
            </span>
          </label>

          <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 mt-1 leading-[1.375rem]'>
              Confirm Password <sup className='text-pink-200'>*</sup>
            </p>
            <input
              required
              type={showPassword1 ? "text" : "password"}
              name="confirmPassword"
              onChange={changeHandler}
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              className='bg-richblack-800 rounded-lg w-full p-[12px] shadow-[0px_2px_2px_-1px_white] text-white'
            />
            <span 
            className='absolute right-3 top-[38px] cursor-pointer '
            onClick={() => setShowPassword1((prev) => !prev)}>
              {showPassword1 ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> : <AiOutlineEye fontSize={24} fill='#AFB2BF'/>}
            </span>
          </label>

        </div>

        <button type="submit" className='w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-5'>Create Account</button>
      </form>
    </div>
  );
};

export default SignupForm;
