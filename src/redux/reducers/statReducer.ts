import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Draft } from 'immer';

interface statSlice {
  totalQuestionsQty: number,
  correctAnswers: number,
  categoriesId: Record<string, number>,
  difficulty: {
    [key: string]: number
  },
  types: {
    [key: string]: number
  },
  time: number
}

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
    setChoosenCategory(state: Draft<statSlice>, action: PayloadAction<string>) {
      if (!state.categoriesId[action.payload]) {
        state.categoriesId[action.payload] = 0
      }
      state.categoriesId[action.payload] += 1
    },
    setChoosenDiff(state: Draft<statSlice>, action: PayloadAction<string>) {
      state.difficulty[action.payload] += 1
    },
    setChoosenType(state: Draft<statSlice>, action: PayloadAction<string>) {
      state.types[action.payload] += 1
    },
    setSpendedTime(state, action: PayloadAction<number>) {
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