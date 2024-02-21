import s from './Question.module.css'
import { Circles } from '../Circles/Circles'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

export function Question({
  currentQuestionData,
  questionQty,
  currentQuestionNumber,
  getNextQuestion
}) {
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [isAnswered, setIsAnswered] = useState(false)

  const rightAnswer = currentQuestionData.correct_answer
  const wrongAnswers = currentQuestionData.incorrect_answers
  const answersForOneQuestion = [...wrongAnswers, rightAnswer]

  const getSuffledArray = (array) => {
    const arrayCopy = [...array]
    for (let i = arrayCopy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]]
    }
    return arrayCopy
  }

  useEffect(() => {
    if (isAnswered) {
      const timeOfShowingAnswer = setTimeout(() => {
        setIsAnswered(false)
        getNextQuestion(selectedAnswer)
      }, 1200)

      return () => clearTimeout(timeOfShowingAnswer)
    }
  }, [isAnswered])

  const shuffledAnswers = currentQuestionData
    ? getSuffledArray([
        ...currentQuestionData.incorrect_answers,
        currentQuestionData.correct_answer
      ])
    : []

  function handleClick(answer) {
    setSelectedAnswer(answer)
    setIsAnswered(true)
  }

  function getAnswerClass(answer) {
    if (!isAnswered) return s.answer_item
    if (answer === rightAnswer) {
      return `${s.answer_item} ${s.correct}`
    }
    if (answer === selectedAnswer) return `${s.answer_item} ${s.incorrect}`
    return s.answer_item
  }
  const totalQuestionsAmount = useSelector((state) => {
    return state.stat
  })

  console.log(totalQuestionsAmount)
  return (
    <>
      <div className={s.question_wrapper}>
        <div className={s.question_area}>
          <h2 className={s.question_header}>
            <Circles />
            Question {currentQuestionNumber + 1} of {questionQty}
          </h2>
          <p className={s.question_text}>{currentQuestionData.question}</p>
        </div>

        <div
          className={s.answer_area}
          style={isAnswered ? { pointerEvents: 'none', cursor: 'not-allowed' } : null}>
          {shuffledAnswers.map((answer, i) => {
            return (
              <div className={getAnswerClass(answer)} key={i} onClick={() => handleClick(answer)}>
                {answer}
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
