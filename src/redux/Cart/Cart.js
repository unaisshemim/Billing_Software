import { createSlice } from '@reduxjs/toolkit'
const initialState={
  cart:[]
}
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.cart = action.payload
    },
    reset: (state) => {
      state.cart=[]
    },
  
  },
})

// Action creators are generated for each case reducer function
export const { add, reset } = cartSlice.actions

export default cartSlice.reducer