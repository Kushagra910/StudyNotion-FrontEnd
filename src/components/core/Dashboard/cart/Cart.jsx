import React from 'react'
import { useSelector } from 'react-redux'
import RenderCartCourses from './RenderCartCourses';
import RenderTotalAmount from './RenderTotalAmount';


const Cart = () => {

  const {totalPrice,totalItems} = useSelector((state)=>state.cart);

  return (
    <div className='text-white'>
      <h1>Your Cart</h1>
      <p>{totalItems} Courses in Cart</p>
      {
        totalPrice > 0 ? (<div>
            <RenderCartCourses/>
            <RenderTotalAmount/>
        </div>) : (<p>Your Cart is Empty</p>)
      }
    </div>
  )
}

export default Cart