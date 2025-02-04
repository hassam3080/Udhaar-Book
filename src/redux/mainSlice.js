import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: "",
  amount: "", // This should probably be 0 if it's meant to be a number
  type: "",
  data: [],
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setName: (state,action) => {
      state.name = action.payload
    },
    setAmount: (state,action) => {
      state.amount = action.payload
    },
    setType: (state,action) => {
      state.type = action.payload
    },
    
    setData: (state, action) => {
      state.data = [...state.data, action.payload]

    },
  },
})

// Action creators are generated for each case reducer function
export const { setName, setAmount, setType, setData } = mainSlice.actions;

export const selectName = (state)=> state.main.name 
export const selectAmount = (state)=> state.main.amount
export const selectType = (state)=> state.main.type 
export const selectData = (state)=> state.main.data 

export default mainSlice.reducer