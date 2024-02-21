import { useState, useEffect } from 'react'
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
  setChoosenType
} from '../../redux/reducers/statReducer'
import { Timer } from '../../components/Timer/Timer'

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
  const [startTimer, setStartTimer] = useState(false);

  useEffect(() => {
    setStartTimer(true);
  }, []);

  useEffect(() => {
    if (gameIsDone) {
      navigate('/result', {
        state: { correctAnswersValue: correctAnswersValue, category: currentQuestionData.category }
      })
    }
  }, [gameIsDone, navigate])

  let currentQuestionData;

  if (data?.results) {
    const decodedAllQuestions = decodeQuestions(data.results);
    currentQuestionData = decodedAllQuestions[currentQuestionNumber];
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

  const dispatch = useDispatch()

  function getNextQuestion(selectedAnswer) {
    if (selectedAnswer === currentQuestionData.correct_answer) {
      setCorrectAnswersValue((v) => v + 1)
      dispatch(setCorrectQuestionQty())
    }

    if (currentQuestionNumber + 1 < questionQty) {
      setCurrentQuestionNumber((v) => v + 1)
    } else {
      setGameIsDone(true)
    }
    
    addDataToStat()
  }

  function addDataToStat() {
    dispatch(setChoosenCategory(currentQuestionData.category))
    dispatch(setTotalQuestionQty())
    dispatch(setChoosenDiff(difficulty))
    dispatch(setChoosenType(type))
  }

  function handleTimeRemaining() {
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
          <Timer 
          handleTimeRemaining={handleTimeRemaining}
          start={startTimer}
          />
        </div>
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
