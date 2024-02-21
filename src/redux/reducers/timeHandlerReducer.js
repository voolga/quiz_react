import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  game: [],
}

const timeHandlerSlice = createSlice({
  name: 'time',
  initialState,
  reducers: {
    setGameTime(state, action) {
      const { index, value } = action.payload
      if (!state.game[index]) {
        state.game[index] = 0
      }
      state.game[index] = value
    },
    
  }
})

export const { setGameTime } = timeHandlerSlice.actions
export const timeHandlerReducer = timeHandlerSlice.reducer
