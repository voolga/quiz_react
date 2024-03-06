import { QuestionInterface } from "../../../redux/reducers/questionsQuiz";

export function getSuffledArray(currentQuestionData: QuestionInterface): string[] {

    const rightAnswer = currentQuestionData.correct_answer
    const wrongAnswers = currentQuestionData.incorrect_answers
    const answersForOneQuestion = [...wrongAnswers, rightAnswer]

    const arrayCopy = [...answersForOneQuestion]
    for (let i = arrayCopy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]]
    }
    return arrayCopy
  }