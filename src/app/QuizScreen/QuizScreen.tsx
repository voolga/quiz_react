import { useState, useEffect, useRef } from 'react'
import { Question } from '../../components/Quiestion/Question'
import s from './QuizScreen.module.css'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useGetQuestionsQuery } from '../../redux/reducers/questionsQuiz'
import { Loader } from '../../components/Loader/Loader'
import {
  setCorrectQuestionQty,
  setSpendedTime
} from '../../redux/reducers/statReducer'
import { setLastGameTime } from '../../redux/reducers/currentGameTimeReducer'
import { Timer } from '../../components/Timer/Timer'
import {useAddDataToStat} from './hooks/useAddDataToStat'
import { decodeQuestions } from './utils/decodeQuestions'
import { RootState } from '../../redux/index'
import { QuestionInterface } from '../../redux/reducers/questionsQuiz'


export const QuizScreen: React.FC = () =>  {
  const navigate = useNavigate()
  const ref = useRef<number>(new Date().getTime())
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState<number>(0)
  const [correctAnswersValue, setCorrectAnswersValue] = useState<number>(0)
  const [gameIsDone, setGameIsDone] = useState(false)
  const gameSettings = useSelector((state: RootState) => state.settings)

  let { questionQty, categoryId, difficulty, type, time } = gameSettings
  const { data, isFetching } = useGetQuestionsQuery({
    questionQty,
    categoryId,
    difficulty,
    type
  })
  const [startTimer, setStartTimer] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    setStartTimer(true)
  }, [])

  useEffect(() => {
    if (gameIsDone) {
      navigate('/result', {
        state: {
          correctAnswersValue: correctAnswersValue,
          category: currentQuestionData.category
        }
      })
    }
  }, [gameIsDone, navigate])

  let currentQuestionData: QuestionInterface;

  if (data?.results) {
    const decodedAllQuestions = decodeQuestions(data.results)
    currentQuestionData = decodedAllQuestions[currentQuestionNumber]
  }

  function checkAnswerAccuracy(answer: string): void {
    if (answer === currentQuestionData.correct_answer) {
      setCorrectAnswersValue((v) => v + 1)
      dispatch(setCorrectQuestionQty())
    }
  }

  function handleAnswer(selectedAnswer: string): void {
    checkAnswerAccuracy(selectedAnswer)

    if (currentQuestionNumber + 1 < questionQty) {
      setCurrentQuestionNumber((v) => v + 1)
    } else {
      let now = new Date().getTime()
      let difference = now - ref.current
      dispatch(setLastGameTime(difference))
      dispatch(setSpendedTime(difference))
      setGameIsDone(true)
    }
    useAddDataToStat(currentQuestionData)
  }

  function handleTimeExpiring(): void {
    dispatch(setLastGameTime(time))
    dispatch(setSpendedTime(time))
    setGameIsDone(true)
    navigate('/result', {
      state: { correctAnswersValue: correctAnswersValue, category: currentQuestionData.category }
    })
  }

  if (isFetching) return <Loader />

  return (
    <>
      <div className={s.container}>
        <div className={s.timer}>
          <Timer handleTimeExpiring={handleTimeExpiring} start={startTimer} settedTime={time} />
        </div>
        <Question
          currentQuestionNumber={currentQuestionNumber}
          questionQty={questionQty}
          // @ts-ignore
          currentQuestionData={currentQuestionData}
          handleAnswer={handleAnswer}
        />
        <Link to={'/quiz/modal'} className={s.end_game}>
          End game
        </Link>
      </div>
      <Outlet />
    </>
  )
}
