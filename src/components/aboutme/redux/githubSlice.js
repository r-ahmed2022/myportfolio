import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  info: {
    projectCount: 0,
    starCount: 0
  },
}

export const githubSlice = createSlice({
  name: 'githubInfo',
  initialState,
  reducers: {
    update:(state, action) => {
       state.info = {
        name: "riyaz",
        email: "m@example.com"
       }
    },  
  },
  extraReducers: {

  }
})

export const { update } = githubSlice.actions

export default githubSlice.reducer