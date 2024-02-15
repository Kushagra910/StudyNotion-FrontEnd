import React from 'react'
import { useSelector } from 'react-redux'
import RenderCartCourses from './RenderCartCourses';
import RenderTotalAmount from './RenderTotalAmount';


const Cart = () => {

  const {totalPrice,totalItems} = useSelector((state)=>state.cart);
  console.log("totalPrice",totalPrice);

  return (
    <div>
      <h1 className='mb-14 text-3xl font-medium text-richblack-5'>Your Cart</h1>
      <p className='border-b border-b-richblack-400 pb-2 font-semibold text-rich-black-400'>{totalItems} Courses in Cart</p>
      {
        totalPrice > 0 ? (<div className='mt-8 flex flex-col-reverse md:flex-row items-start gap-x-10 gap-y-6'>
            <RenderCartCourses/>
            <RenderTotalAmount/>
        </div>) : (<p className='mt-14 text-center text-3xl text-richblack-200'>Your Cart is Empty</p>)
      }
    </div>
  )
}

export default Cart