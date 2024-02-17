import { configureStore } from '@reduxjs/toolkit'
import { settingsReducer } from './reducers/settingsReducer'
import { categoriesReducer } from './reducers/categoriesReducer'
import { questionQuiz } from './reducers/questionsQuiz'

const reducers = {
  settings: settingsReducer,
  categories: categoriesReducer,
  [questionQuiz.reducerPath]: questionQuiz.reducer
}

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(questionQuiz.middleware)
})
