import {createSlice} from "@reduxjs/toolkit"
import {toast} from 'react-hot-toast'

const initialState = {
   totalItems : localStorage.getItem("totalItems") ? JSON.parse(localStorage.getItem("totalItems")) : 0,
   cart : localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
   totalPrice : localStorage.getItem("totalPrice") ? JSON.parse(localStorage.getItem("totalPrice")) : 0,
};

const cartSlice = createSlice({
  name:"car",
  initialState:initialState,
  reducers : {
    setTotalItems(state,value){
      state.user = value.payload;  
    },
    // write add to cart function
    addToCart(state,action){
        const course = action.payload;
        const index = state.cart.findIndex((item) => item._id === course._id); // return first occurance of course otherwise -1
        if(index>=0) {
          // means course is already added so donot update state
          toast.error("Course already added");
        }
        // this means course is not present
        state.totalItems++;
        state.totalPrice += course.price;
        // now update the local storage
        localStorage.setItem("totalItems" , JSON.stringify(state.totalItems));
        localStorage.setItem("totalPrice" , JSON.stringify(state.totalPrice));
        localStorage.setItem("cart" , JSON.stringify(state.cart));

        toast.success("Course added to cart");
    },
    // write remove from cart function
    removeFromCart(state,action){
      const courseId = action.payload
      const index = state.cart.findIndex((item) => item._id === courseId)

      if (index >= 0) {
        // If the course is found in the cart, remove it
        state.totalItems--;
        state.totalPrice -= state.cart[index].price;// course price needs to be subtracted 
        state.cart.splice(index, 1);
        // Update to localstorage
        localStorage.setItem("cart", JSON.stringify(state.cart));
        localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
        localStorage.setItem("totalItems", JSON.stringify(state.totalItems));
        // show toast
        toast.success("Course removed from cart");
     }
    },
    // write resetCart function
    resetCart(state){
      state.cart = [];
      state.totalItems = 0;
      state.totalPrice = 0;
      // update the local storage 
      localStorage.removeItem("cart");
      localStorage.removeItem('totalItems');
      localStorage.removeItem("totalPrice");
    }
  }
})

export const {setTotalItems,addToCart,resetCart,removeFromCart} = cartSlice.actions;
export default cartSlice.reducer; 