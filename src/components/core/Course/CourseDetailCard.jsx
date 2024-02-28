import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import copy from 'copy-to-clipboard';
import { ACCOUNT_TYPE } from '../../../data/constants';
import { addToCart } from '../../../slices/cartSlice';
import { BsFillCaretRightFill } from "react-icons/bs"
import { FaShareSquare } from "react-icons/fa"



const CourseDetailCard = ({course,setConfirmationModal,handleBuyCourse}) => {


  const {user} = useSelector((state)=>state.profile);
  const {token} = useSelector((state)=>state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    thumbnail : ThumbnailImage,
    price : CurrentPrice,
    _id: courseId,
  } = course;


  const handleAddToCart = () =>{
    if(user && user?.accountType === ACCOUNT_TYPE.INSTRUCTOR){
      toast.error("You are an Instructor,You cannot Buy a Course");
      return;
    }
    if(token){
      dispatch(addToCart(course));
      return;
    }

    setConfirmationModal({
      text1:"you are not logged in",
      text2:"Please login to add to cart",
      btn1text:"login",
      btn2Text:"cancel",
      btn1Handler:()=>navigate("/login"),
      btn2Handler: ()=> setConfirmationModal(null),
  })

  }

  const handleShare = () => {
    copy(window.location.href);
    toast.success("Copied to Clipboard")
  }

  return (
    <div className='flex flex-col md:max-w-[384px] rounded-md bg-richblack-700 gap-4 text-richblack-5 '>
      <img src={ThumbnailImage} alt="ThumbnailImage"
        className='md:max-h-[300px] min-h-[180px] h-full md:overflow-hidden rounded-xl w-full md:max-w-full object-cover'
      />
 <div className="px-4">
          <div className="space-x-3 pb-4 text-3xl font-semibold">
            Rs. {CurrentPrice}
          </div>
          <div className="flex flex-col gap-4">
            <button
              className="yellowButton"
              onClick={
                user && course?.studentEnrolled.includes(user?._id)
                  ? () => navigate("/dashboard/enrolled-courses")
                  : handleBuyCourse
              }
            >
            {console.log("user",user,"STUDENTS ENROLLED",course.studentEnrolled)}
              {user && course?.studentEnrolled.includes(user?._id)
                ? "Go To Course"
                : "Buy Now"}
            </button>
            {(!user || !course?.studentEnrolled.includes(user?._id)) && (
              <button onClick={handleAddToCart} className="blackButton">
                Add to Cart
              </button>
            )}
          </div>
          <div>
            <p className="pb-3 pt-6 text-center text-sm text-richblack-25">
              30-Day Money-Back Guarantee
            </p>
          </div>

          <div className={``}>
            <p className={`my-2 text-xl font-semibold `}>
              This Course Includes :
            </p>
            <div className="flex flex-col gap-3 text-sm text-caribbeangreen-100">
              {course?.instructions?.map((item, i) => {
                return (
                  <p className={`flex gap-2`} key={i}>
                    <BsFillCaretRightFill />
                    <span>{item}</span>
                  </p>
                )
              })}
              {
                course?.instructions.length === 0 && <div>Not Given</div>
              }
            </div>
          </div>
          <div className="text-center">
            <button
              className="mx-auto flex items-center gap-2 py-6 text-yellow-100 "
              onClick={handleShare}
            >
              <FaShareSquare size={15} /> Share
            </button>
          </div>
        </div>
    </div>
  )
}

export default CourseDetailCard
