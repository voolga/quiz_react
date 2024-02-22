import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  totalQuestionsQty: 0,
  correctAnswers: 0,
  categoriesId: {
  },
  difficulty: {
    easy: 0,
    medium: 0,
    hard: 0
  },
  types: {
    boolean: 0,
    multiple: 0
  },
  time: 0
}

const statSlice = createSlice({
  name: 'stat',
  initialState,
  reducers: {
    setTotalQuestionQty(state) {
      state.totalQuestionsQty += 1
    },
    setCorrectQuestionQty(state) {
      state.correctAnswers += 1
    },
    setChoosenCategory(state, action) {
      if (!state.categoriesId[action.payload]) {
        state.categoriesId[action.payload] = 0
      }
      state.categoriesId[action.payload] += 1
    },
    setChoosenDiff(state, action) {
      state.difficulty[action.payload] += 1
    },
    setChoosenType(state, action) {
      state.types[action.payload] += 1
    },
    setSpendedTime(state, action) {
      state.time += action.payload
    },
    clearMyStat() {
      return initialState
    }
  }
})

export const {
  setTotalQuestionQty,
  setCorrectQuestionQty,
  setChoosenCategory,
  setChoosenDiff,
  setChoosenType,
  setSpendedTime,
  clearMyStat
} = statSlice.actions
export const statReducer = statSlice.reducer