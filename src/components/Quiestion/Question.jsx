import s from './Question.module.css'
import { Circles } from '../Circles/Circles'
import { useState, useEffect } from 'react'

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

  function getSuffledArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }

  useEffect(() => {
    getSuffledArray(answersForOneQuestion)
  }, [])

  useEffect(() => {
    if (isAnswered) {
      const timeOfShowingAnswer = setTimeout(() => {
        setIsAnswered(false)
        getNextQuestion(selectedAnswer)
      }, 1200)

      return () => clearTimeout(timeOfShowingAnswer)
    }
  }, [isAnswered])

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
          {answersForOneQuestion.map((answer, i) => {
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

// {
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
//       {
//           "type": "multiple",
//           "difficulty": "easy",
//           "category": "General Knowledge",
//           "question": "The Canadian $1 coin is colloquially known as a what?",
//           "correct_answer": "Loonie",
//           "incorrect_answers": [
//               "Boolie",
//               "Foolie",
//               "Moodie"
//           ]
//       },
//       {
//           "type": "multiple",
//           "difficulty": "easy",
//           "category": "General Knowledge",
//           "question": "What is the largest organ of the human body?",
//           "correct_answer": "Skin",
//           "incorrect_answers": [
//               "Heart",
//               "large Intestine",
//               "Liver"
//           ]
//       },
//       {
//           "type": "multiple",
//           "difficulty": "easy",
//           "category": "General Knowledge",
//           "question": "What is the nickname of the US state of California?",
//           "correct_answer": "Golden State",
//           "incorrect_answers": [
//               "Sunshine State",
//               "Bay State",
//               "Treasure State"
//           ]
//       },
//       {
//           "type": "multiple",
//           "difficulty": "easy",
//           "category": "General Knowledge",
//           "question": "What does a funambulist walk on?",
//           "correct_answer": "A Tight Rope",
//           "incorrect_answers": [
//               "Broken Glass",
//               "Balls",
//               "The Moon"
//           ]
//       }
//   ]
// }
