import { useState, useEffect } from 'react'
import { Question } from '../../components/Quiestion/Question'
import s from './QuizScreen.module.css'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useGetQuestionsQuery } from '../../redux/reducers/questionsQuiz'
import { Loader } from '../../components/Loader/Loader'

export function QuizScreen() {
  debugger
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0)
  const [correctAnswersValue, setCorrectAnswersValue] = useState(0)
  const gameSettings = useSelector((state) => state.settings)
  let { questionQty, categoryId, difficulty, type } = gameSettings
  const { data, error, isLoading, isFetching } = useGetQuestionsQuery({
    questionQty,
    categoryId,
    difficulty,
    type
  })

  if (isFetching) return <Loader />

  const currentQuestionData = data.results[currentQuestionNumber]

  function getNextQuestion() {
    setCurrentQuestionNumber((v) => v + 1)
  }

  return (
    <>
      <div className={s.container}>
        <div className={s.timer}>01:00</div>
        <Question
          currentQuestionNumber={currentQuestionNumber}
          questionQty={questionQty}
          currentQuestionData={currentQuestionData}
          getNextQuestion={getNextQuestion}
        />
        <Link to={'/quiz/modal'} className={s.end_game}>
          End game
        </Link>
      </div>
      <Outlet />
    </>
  )
}

//   "response_code": 0,
//   "results": [
//       {
//           "type": "multiple",
//           "difficulty": "easy",
//           "category": "General Knowledge",
//           "question": "Which sign of the zodiac comes between Virgo and Scorpio?",
//           "correct_answer": "Libra",
//           "incorrect_answers": [
//               "Gemini",
//               "Taurus",
//               "Capricorn"
//           ]
//       },
