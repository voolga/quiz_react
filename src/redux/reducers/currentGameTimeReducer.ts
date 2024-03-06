import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface TimeState {
  currentGameTime: number
}

const initialState: TimeState = {
  currentGameTime: 0
}

const currentGameTimeSlice = createSlice({
  name: 'time',
  initialState,
  reducers: {
    setLastGameTime(state, action: PayloadAction<number>) {
      state.currentGameTime = action.payload
    }
  }
})

export const { setLastGameTime } = currentGameTimeSlice.actions
export const currentGameTimeReducer = currentGameTimeSlice.reducer
