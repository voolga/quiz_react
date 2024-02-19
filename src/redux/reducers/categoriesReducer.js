import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async function () {
    const response = await fetch('https://opentdb.com/api_category.php')

  const data = await response.json()
  return data
})

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    status: null,
    error: null
  },
  reducers: {
    setCategory(state, action) {
      state.category = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = 'loaded'
        state.categories = action.payload
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export const { setCategory } = categoriesSlice.actions
export const categoriesReducer = categoriesSlice.reducer
