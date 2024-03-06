import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface SettingsState {
  categoryId: string
  difficulty: string
  type: string
  time: number
  questionQty: number
}

const initialState: SettingsState = {
  categoryId: '',
  difficulty: '',
  type: '',
  time: 60000,
  questionQty: 5
}

const settingsSclice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<string>) {
      console.log('settingsReducer');

      state.categoryId = action.payload
    },
    setDifficulty(state, action: PayloadAction<string>) {
      state.difficulty = action.payload
    },
    setType(state, action: PayloadAction<string>) {
      state.type = action.payload
    },
    setTime(state, action: PayloadAction<number>) {
      state.time = action.payload
    },
    setNumberOfQuestion(state, action: PayloadAction<number>) {
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
