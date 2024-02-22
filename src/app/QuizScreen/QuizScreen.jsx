import { useState, useEffect, useRef } from 'react'
import { Question } from '../../components/Quiestion/Question'
import s from './QuizScreen.module.css'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { decode } from 'html-entities'
import { useGetQuestionsQuery } from '../../redux/reducers/questionsQuiz'
import { Loader } from '../../components/Loader/Loader'
import {
  setTotalQuestionQty,
  setCorrectQuestionQty,
  setChoosenCategory,
  setChoosenDiff,
  setChoosenType,
  setSpendedTime
} from '../../redux/reducers/statReducer'
import { setLastGameTime } from '../../redux/reducers/currentGameTimeReducer'
import { Timer } from '../../components/Timer/Timer'

export function QuizScreen() {
  const navigate = useNavigate()
  const ref = useRef(new Date().getTime());
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0)
  const [correctAnswersValue, setCorrectAnswersValue] = useState(0)
  const [gameIsDone, setGameIsDone] = useState(false)
  const gameSettings = useSelector((state) => state.settings)

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

  let currentQuestionData

  if (data?.results) {
    const decodedAllQuestions = decodeQuestions(data.results)
    currentQuestionData = decodedAllQuestions[currentQuestionNumber]
  }

  function decodeQuestions(questions) {
    return questions.map((question) => {
      const decodedQuestion = decode(question.question)
      const decodedCorrectAnswer = decode(question.correct_answer)

      const decodedIncorrectAnswers = question.incorrect_answers
        ? question.incorrect_answers.map((answer) => decode(answer))
        : []

      return {
        ...question,
        question: decodedQuestion,
        correct_answer: decodedCorrectAnswer,
        incorrect_answers: decodedIncorrectAnswers
      }
    })
  }
  function checkAnswerAccuracy(answer) {
    if (answer === currentQuestionData.correct_answer) {
      setCorrectAnswersValue((v) => v + 1)
      dispatch(setCorrectQuestionQty())
    }
  }

  function handleAnswer(selectedAnswer) {
    checkAnswerAccuracy(selectedAnswer)

    if (currentQuestionNumber + 1 < questionQty) {
      setCurrentQuestionNumber((v) => v + 1)
    } else {
      let now = new Date().getTime();
      let difference =  now - ref.current;
      dispatch(setLastGameTime(difference))
      dispatch(setSpendedTime(difference))
      setGameIsDone(true)
    }

    addDataToStat()
  }

  function addDataToStat() {
    dispatch(setChoosenCategory(currentQuestionData.category))
    dispatch(setTotalQuestionQty())
    dispatch(setChoosenDiff(currentQuestionData.difficulty))
    dispatch(setChoosenType(currentQuestionData.type))
  }

  function handleTimeExpiring() {
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
