import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const questionQuiz = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://opentdb.com/api.php' }),
  reducerPath: 'questionQuiz',
  endpoints: (build) => ({
    getQuestions: build.query({
      query: ({ questionQty, categoryId, difficulty, type }) => {
        let totalUrl = `?amount=${questionQty}`

        if (categoryId) {
          totalUrl += `&category=${categoryId}`
        }
        if (difficulty) {
          totalUrl += `&difficulty=${difficulty}`
        }
        if (type) {
          totalUrl += `&type=${type}`
        }

        return totalUrl
      },
      keepUnusedDataFor: 0
    })
  })
})

export const { useGetQuestionsQuery } = questionQuiz
