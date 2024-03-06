import { decode } from 'html-entities'
import { QuestionInterface } from '../../../redux/reducers/questionsQuiz'

export function decodeQuestions(questions: QuestionInterface[]): QuestionInterface[] {
    return questions.map((question) => {
      const decodedQuestion = decode(question.question)
      const decodedCorrectAnswer = decode(question.correct_answer)

      const decodedIncorrectAnswers = question.incorrect_answers.map((answer) => decode(answer))

      return {
        ...question,
        question: decodedQuestion,
        correct_answer: decodedCorrectAnswer,
        incorrect_answers: decodedIncorrectAnswers
      }
    })
  }