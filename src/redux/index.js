import { configureStore } from "@reduxjs/toolkit";
import { settingsReducer } from './reducers/settingsReducer'

const reducers = {
  settings: settingsReducer,
}

export const store = configureStore({
  reducer: reducers
})
