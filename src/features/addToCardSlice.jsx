import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 cartItems: [],
 cartTotalQuantity:0,
 cartTotalAmount:0,
}

export const addToCardSlice = createSlice ({
 name:"cart",
 initialState,
 reducers:{
    addToCart(state,action){
     const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)

     if(itemIndex >= 0)
     {
        state.cartItems[itemIndex].cartQuantity += 1
     }
     else
     {
        const temp = {...action.payload , cartQuantity: 1}
        state.cartItems.push(temp)
     }
   },
   removeFromCart(state,action){
      const removeItem = state.cartItems.filter((item)=> item.id !== action.payload.id)
      state.cartItems = removeItem
    },
    decreaseCart(state,action)
    {
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)
      if(state.cartItems[itemIndex].cartQuantity > 1)
      {
         state.cartItems[itemIndex].cartQuantity -= 1
      }
      else if (state.cartItems[itemIndex].cartQuantity === 1)
      {
         const removeItem = state.cartItems.filter((item)=> item.id !== action.payload.id)
         state.cartItems = removeItem
      }
    },
    clearBasket(state){
      state.cartItems = []
    },
    calculateTotalPrice(state)
    {
      let {total,quantity} = state.cartItems.reduce((cartTotal,item)=>{
         const { price, cartQuantity } = item;
         //کارت کوآنتیتی تعداد محصول است
         const itemTotal = Number(price * cartQuantity * 1000);
         console.log();

         cartTotal.total += itemTotal;
         cartTotal.quantity += cartQuantity;

         return cartTotal
      },{
         total:0,
         quantity:0
      })
      state.cartTotalQuantity = quantity
      state.cartTotalAmount = total
    }
 }
})

export const { addToCart, removeFromCart, decreaseCart, clearBasket,calculateTotalPrice } = addToCardSlice.actions;
export default addToCardSlice.reducer