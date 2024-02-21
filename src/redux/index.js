import { configureStore } from '@reduxjs/toolkit'
import { settingsReducer } from './reducers/settingsReducer'
import { categoriesReducer } from './reducers/categoriesReducer'
import { questionQuiz } from './reducers/questionsQuiz'
import { statReducer } from './reducers/statReducer'
import storage from 'redux-persist/lib/storage'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'

const statPersistConfig = {
  key: 'stat',
  storage
}

const persistedStatReducer = persistReducer(statPersistConfig, statReducer)

const reducers = {
  settings: settingsReducer,
  categories: categoriesReducer,
  stat: persistedStatReducer,
  [questionQuiz.reducerPath]: questionQuiz.reducer
}

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat(questionQuiz.middleware)
})

export let persistor = persistStore(store)
