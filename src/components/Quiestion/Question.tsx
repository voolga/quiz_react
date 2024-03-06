import s from './Question.module.css'
import { Circles } from '../Circles/Circles'
import { useState, useEffect } from 'react'
import { QuestionInterface } from '../../redux/reducers/questionsQuiz'
import { getSuffledArray } from './utils/shuffleArrayOfAnswers'

interface QuestionProps {
  currentQuestionData: QuestionInterface
  questionQty: number
  currentQuestionNumber: number
  handleAnswer: (param: string) => void
}

export function Question({
  currentQuestionData,
  questionQty,
  currentQuestionNumber,
  handleAnswer
}: QuestionProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [shuffledArray, setShuffledArray] = useState<string[]>([])

  useEffect(() => {
    setShuffledArray(getSuffledArray(currentQuestionData))
  }, [currentQuestionData])

  useEffect(() => {
    if (isAnswered) {
      const timeOfShowingAnswer = setTimeout(() => {
        setIsAnswered(false)
        if (selectedAnswer !== null) {
          handleAnswer(selectedAnswer);
        }
      }, 1200)

      return () => clearTimeout(timeOfShowingAnswer)
    }
  }, [isAnswered])

  function handleClick(answer: string) {
    setSelectedAnswer(answer)
    setIsAnswered(true)
  }

  function getAnswerClass(answer: string) {
    if (!isAnswered) return s.answer_item
    if (answer === currentQuestionData.correct_answer) {
      return `${s.answer_item} ${s.correct}`
    }
    if (answer === selectedAnswer) return `${s.answer_item} ${s.incorrect}`
    return s.answer_item
  }

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
          style={isAnswered ? { pointerEvents: 'none', cursor: 'not-allowed' } : {}}>
          {shuffledArray.map((answer, i) => {
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
