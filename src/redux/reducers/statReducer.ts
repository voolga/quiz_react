import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Draft } from 'immer';

interface statSlice {
  totalQuestionsQty: number,
  correctAnswers: number,
  categoriesId: Record<string, number>,
  difficulty: {
    easy: number,
    medium: number,
    hard: number
  },
  types: {
    boolean: number,
    multiple: number
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
      console.log(state.categoriesId);
    },
    setChoosenDiff(state, action: PayloadAction<'easy' | 'medium' | 'hard'>) {
      state.difficulty[action.payload] += 1
    },
    setChoosenType(state, action: PayloadAction<'boolean' | 'multiple'>) {
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