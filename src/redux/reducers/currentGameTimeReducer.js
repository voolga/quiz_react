import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentGameTime: 0
}

const currentGameTimeSlice = createSlice({
  name: 'time',
  initialState,
  reducers: {
    setLastGameTime(state, action) {
      state.currentGameTime = action.payload
    }
  }
})

export const { setLastGameTime } = currentGameTimeSlice.actions
export const currentGameTimeReducer = currentGameTimeSlice.reducer
