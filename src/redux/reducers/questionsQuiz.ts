import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface QuestionsQueryArgs {
  questionQty: number;
  categoryId?: string; 
  difficulty?: string; 
  type?: string;
}

export interface QuestionInterface {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface QuestionsApiResponse {
  response_code: number;
  results: QuestionInterface[];
}

export const questionQuiz = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://opentdb.com/api.php' }),
  reducerPath: 'questionQuiz',
  endpoints: (build) => ({
    getQuestions: build.query<QuestionsApiResponse, QuestionsQueryArgs>({
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
