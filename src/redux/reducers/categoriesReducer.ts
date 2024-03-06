import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

interface Data {
  trivia_categories: Category[]
}

interface Category {
  id: number;
  name: string;
}

interface CategoriesState {
  categories: Category[];
  status: 'idle' | 'loading' | 'loaded' | 'failed';
  error: string | null | undefined;
}

export const fetchCategories = createAsyncThunk<Category[]>('categories/fetchCategories', async function () {
  const response = await fetch('https://opentdb.com/api_category.php')
  const data: Data  = await response.json()
  return data.trivia_categories
})

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    status: 'idle',
    error: null
  } as CategoriesState,
  reducers: {

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

export const categoriesReducer = categoriesSlice.reducer
