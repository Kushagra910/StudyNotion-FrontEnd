import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { buyCourse } from '../services/operations/paymentApi';

const CourseDetails = () => {
  const {user} = useSelector((state)=>state.profile);
  const {token} = useSelector((state)=>state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {courseId} = useParams();
  const handleBuyCourse = async()=>{
    if(token){
      buyCourse(token,[courseId],user,navigate,dispatch)
    }
  }
  return (
    <div className='flex justify-center items-center h-screen'>
      <button className='text-richblack-400 bg-richblack-5 px-5'
      onClick={handleBuyCourse}>Buy Now</button>
    </div>
  )
}

export default CourseDetails
