import { configureStore } from '@reduxjs/toolkit'
import  cartSlice  from './Cart/Cart'
export const store = configureStore({
  reducer: {
    cart:cartSlice
  },
})
