import React from 'react'
import {useState} from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai'
import {Link, useNavigate} from 'react-router-dom'
import {toast} from 'react-hot-toast';
// import { login } from "../../../services/operations/authAPI"
import { useDispatch } from 'react-redux';
 

const LoginForm = () => {
  const dispatch = useDispatch();
  const [formData,setFormData] = useState({
    email:"",
    password:""
  })

  const changeHandler = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name] : event.target.value, 
    }))
  }

  const [showPassword,setShowPassword] = useState(false);

  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    // dispatch(login(formData.email, formData.password, navigate))
    toast.success("Logged In");
  }

  return (
     <form onSubmit={submitHandler} 
     className='flex flex-col w-full gap-y-4 mt-6'>
        <label className='w-full'>
          <p className='text-[0.875rem] text-richblack-5 mt-1 leading-[1.375rem]'>
            Email Address <sup className='text-pink-200'>*</sup>
          </p>
          <input 
            required
            type="email"
            value={formData.email}
            placeholder="Enter email id"
            onChange={changeHandler}
            name="email"
            className='bg-richblack-800 rounded-lg w-full p-[12px] shadow-[0px_2px_2px_-1px_white] text-white'
          />
        </label>

        <label className='w-full relative'>
          <p className='text-[0.875rem] text-richblack-5 mt-1 leading-[1.375rem]'>
            Password <sup className='text-pink-200'>*</sup>
          </p>
          <input 
            required
            type={showPassword ? ("text") : ("password")}
            value={formData.password}
            placeholder="Enter Password"
            onChange={changeHandler}
            name="password"
            className='bg-richblack-800 rounded-lg w-full p-[12px] shadow-[0px_2px_2px_-1px_white] text-white'
          />

          <span 
          className='absolute right-3 top-[38px] cursor-pointer '
            onClick={() => setShowPassword((prev) => !prev)}>
            {showPassword?(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
          </span>

          <Link to="#">
            <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>
              Forgot Password ?
            </p>
          </Link>
        </label>

        <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[1px] mt-5'>Sign In</button>
     </form>
  )
}

export default LoginForm;