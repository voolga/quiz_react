import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const questionQuiz = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://opentdb.com/api.php' }),
  reducerPath: 'questionQuiz',
  endpoints: (build) => ({
    getQuestions: build.query({
      query: ({ questionQty, categoryId, difficulty, type }) => {
        if (questionQty && categoryId && difficulty && type) {
          return `?amount=${questionQty}&category=${categoryId}&difficulty=${difficulty}&type=${type}`
        } else {
          console.log('Не все данные были переданы верно для формирования запроса на получение списка вопросов')
        }
      },
      keepUnusedDataFor: 0,
    })
  })
})

export const { useGetQuestionsQuery } = questionQuiz
