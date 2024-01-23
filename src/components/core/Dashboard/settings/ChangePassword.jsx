import React, { useState } from "react";
import IconBtn from "../../../common/IconBtn";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { changePassword } from "../../../../services/operations/settingsApi";

const ChangePassword = () => {
  const {token} = useSelector((state)=>state.auth);
  const {user} = useSelector((state)=>state.profile);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [oldPassword, setOldPassword] = useState(false);
  const [newPassword, setNewPassword] = useState(false);
  const [confirmPassword,setConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword:"",
    email: user?.email ?? ""

  });

  const changeHandler = (e) => {
    setFormData((prev)=>(
      {
        ...prev,
        [e.target.name] :e.target.value
      }
    ))
  };

  const  submitHandler = async (e) => {
    try{
      e.preventDefault();
      if(oldPassword === newPassword){
        toast.error("New Password cannot be same as current one");
        return;
      }
      if(newPassword !== confirmPassword) {
        toast.error("Password Donot Match")
        return;
      }
      // console.log(formData);
       // Dispatch the changePassword action
        dispatch(changePassword(token, formData));

       // Logic to execute after dispatch is completed (if needed)
       console.log("Password change successful!");
    } catch(err){
      console.log("Submission Problem in ChangePassword Seciton",err.message);
    }
  }
  return (
    <div>
      <form className="flex flex-col" onSubmit={submitHandler}>
        <h2>Password</h2>
        <div>
          <div className="relative">
            <label htmlFor="oldPassword">
              Old Password <span>*</span>
              <input
                required
                placeholder="Enter Old password"
                type={`${oldPassword === true ? "text" : "password"}`}
                name="oldPassword"
                value={formData.oldPassword}
                id="oldPassword"
                onChange={changeHandler}
              />
              <span
                className=" right-3 top-[38px] cursor-pointer "
                onClick={() => setOldPassword((prev) => !prev)}
              >
                {oldPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                )}
              </span>
            </label>
          </div>
          <div className="relative">
            <label htmlFor="newPassword">
              New Password <span>*</span>
              <input
                required
                type={`${newPassword === true ? "text" : "password"}`}
                name="newPassword"
                id="newPassword"
                value={formData.newPassword}
                onChange={changeHandler}
                placeholder="Enter new password"
              />
              <span
                className="right-3 top-[38px] cursor-pointer "
                onClick={() => setNewPassword((prev) => !prev)}
              >
                {newPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                )}
              </span>
            </label>
          </div>
          <div className="relative">
            <label htmlFor="confirmPassword">
              Confirm Password <span>*</span>
              <input
                required
                placeholder="Enter Confirm password"
                type={`${confirmPassword === true ? "text" : "password"}`}
                name="confirmPassword"
                value={formData.confirmPassword}
                id="confirmPassword"
                onChange={changeHandler}
              />
              <span
                className=" right-3 top-[38px] cursor-pointer "
                onClick={() => setConfirmPassword((prev) => !prev)}
              >
                {confirmPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                )}
              </span>
            </label>
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <button
            onClick={() => {
              navigate("/dashboard/my-profile");
            }}
            className="cursor-pointer rounded-md bg-richblack-700 py-2 px-5 font-semibold text-richblack-50"
          >
            Cancel
          </button>
          <IconBtn type="submit" text="Save" />
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
