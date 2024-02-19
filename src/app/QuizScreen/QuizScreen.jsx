import { useState, useEffect } from 'react'
import { Question } from '../../components/Quiestion/Question'
import s from './QuizScreen.module.css'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useGetQuestionsQuery } from '../../redux/reducers/questionsQuiz'
import { Loader } from '../../components/Loader/Loader'

export function QuizScreen() {
  const navigate = useNavigate()
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0)
  const [correctAnswersValue, setCorrectAnswersValue] = useState(0)
  const [gameIsDone, setGameIsDone] = useState(false)
  const gameSettings = useSelector((state) => state.settings)
  let { questionQty, categoryId, difficulty, type } = gameSettings
  const { data, isFetching } = useGetQuestionsQuery({
    questionQty,
    categoryId,
    difficulty,
    type
  })

  const currentQuestionData = data?.results[currentQuestionNumber]
  
  useEffect(() => {
    if (gameIsDone) {
      navigate('/result', { state: { correctAnswersValue: correctAnswersValue } });
    }
  }, [gameIsDone, navigate])

  function getNextQuestion(selectedAnswer) {
    if (selectedAnswer === currentQuestionData.correct_answer) {
      setCorrectAnswersValue((v) => v + 1)
    }

    if (currentQuestionNumber + 1 < questionQty) {
      setCurrentQuestionNumber((v) => v + 1)
    } else {
      setGameIsDone(true)
    }
  }

  if (isFetching) return <Loader />

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
