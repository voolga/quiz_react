import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categoryId: '',
  difficulty: '',
  type: '',
  time: '1m',
  questionQty: '5'
}

const settingsSclice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setCategory(state, action) {
      state.categoryId = action.payload
    },
    setDifficulty(state, action) {
      state.difficulty = action.payload
    },
    setType(state, action) {
      state.type = action.payload
    },
    setTime(state, action) {
      state.time = action.payload
    },
    setNumberOfQuestion(state, action) {
      state.questionQty = action.payload
    },
    clearSettings(state) {
      Object.assign(state, initialState)
    }
  }
})

export const { setCategory, setDifficulty, setType, setTime, setNumberOfQuestion, clearSettings } =
  settingsSclice.actions
export const settingsReducer = settingsSclice.reducer
