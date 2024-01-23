import React from 'react'
import { useSelector } from 'react-redux'
import IconBtn from '../../../common/IconBtn';

const RenderTotalAmount = () => {
  const {totalPrice,cart} = useSelector((state)=>state.cart);
  const handleBuyCourse = ()=>{
        const courses = cart.map((course)=>course._id);
        console.log("Bought these Course",courses);
        //API-Integration for payment gateway 
  }
  return (
    <div>
      <p>Total:</p>
      <p>Rs {totalPrice}</p>
      <IconBtn
        text="Buy now"
        onclick={handleBuyCourse}
        customClasses={'w-full justify-center'}
      />
    </div>
  )
}

export default RenderTotalAmount