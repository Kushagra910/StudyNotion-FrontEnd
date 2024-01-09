import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import OTPInput from "react-otp-input";
import { sendOtp, signUp } from "../services/operations/authApi";
import { useNavigate, Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { PiArrowsCounterClockwise } from "react-icons/pi";


const VerifyEmail = () => {
  const { signupData, loading } = useSelector((state) => state.auth);
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!signupData) {
      navigate("/signup");
    }
  }, []);

  function submitHandler(e) {
    e.preventDefault();
    const {
      accountType,
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    } = signupData;
    dispatch(
      signUp(
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        otp,
        navigate
      )
    );
  }
  return (
    <div className="max-w-full  min-h-screen flex justify-center items-center">
      {!loading ? (
        <div className="flex flex-col max-w-sm gap-3 h-full">
          <h1 className="text-richblack-5 font-semibold text-3xl leading-9">
            Verify Email
          </h1>
          <p className="text-richblack-100 font-normal text-base self-stretch">
          A verification code has been sent to you. Enter the code below
          </p>
          <form onSubmit={submitHandler} className="flex flex-col gap-5">
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderSeparator={<span>-</span>}
              renderInput={(props) => <input {...props} />}
              containerStyle={{
                display: "flex",
                alignItems : "center",
                gap: "4px",
                marginTop: "5px", // Adjust as needed
              }}
              inputStyle={{
                width: "50px", // Adjust as needed
                height: "50px", 
                borderRadius: "8px", 
                backgroundColor: "#161D29", 
                color: "#999DAA", 
                border: "none", // Remove the border
                boxShadow: "0px -1px 0px 0px rgba(255, 255, 255, 0.18) inset",
                textAlign: "center",
                fontSize: "16px", 
              }}
              focusStyle={{ outline: "none" }} // Disable focus outline
            />
            <button
              type="submit"
              className="flex p-3 justify-center items-center gap-2 self-stretch rounded-lg bg-yellow-50 w-full "
              style={{
                boxShadow: "-0.5px -1.5px 0px 0px rgba(0, 0, 0, 0.12) inset",
              }}
            >
              Verify Email
            </button>
          </form>
          <div className="flex justify-between">
            <div className='flex items-center self-stretch gap-2 rounded-lg text-richblack-5 '>
            <IoMdArrowBack />
              <Link to="/login">
                <p className='text-center font-medium text-base'>Back to Login</p>
              </Link>
            </div>
            <button
              onClick={() => dispatch(sendOtp(signupData.email, navigate))}
              className="flex gap-1 items-center text-blue-200"
            >
            <PiArrowsCounterClockwise />
              Resend it
            </button>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default VerifyEmail;
