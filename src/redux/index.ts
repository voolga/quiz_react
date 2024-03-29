import { configureStore, combineReducers  } from '@reduxjs/toolkit'
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
import { currentGameTimeReducer } from './reducers/currentGameTimeReducer'

const statPersistConfig = {
  key: 'stat',
  storage
}

const persistedStatReducer = persistReducer(statPersistConfig, statReducer)

const rootReducer = combineReducers({
  settings: settingsReducer,
  categories: categoriesReducer,
  stat: persistedStatReducer,
  time: currentGameTimeReducer,
  [questionQuiz.reducerPath]: questionQuiz.reducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat(questionQuiz.middleware)
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export let persistor = persistStore(store)
