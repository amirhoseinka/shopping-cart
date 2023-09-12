import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { apiSlice } from "../features/ApiSlice";
import addToCartReducer, { calculateTotalPrice } from "../features/addToCardSlice"

export const store = configureStore({
 reducer:
 {
  cart: addToCartReducer,
  [apiSlice.reducerPath] : apiSlice.reducer,
 },
 middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
})

store.dispatch(calculateTotalPrice());