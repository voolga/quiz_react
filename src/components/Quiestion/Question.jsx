import s from './Question.module.css'
import questionData from '../questionData'
import { Circles } from '../Circles/Circles'
import { ProgressBar } from '../ProgressBar/ProgressBar'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'

export function Question({
  currentQuestionData,
  questionQty,
  currentQuestionNumber,
  getNextQuestion
}) {
  
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [isAnswered, setIsAnswered] = useState(false)
  let isCorrect = false

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
    if (isAnswered === true) {
      setTimeout(() => {
        getNextQuestion()
      }, 3000)
    } 
    // else {
    //   return null
    // }
  }, [isAnswered])

  function handleAnswer(answer) {
    setSelectedAnswer(answer)
    setIsAnswered(true)
  }

  function getAnswerClass(answer) {
    
    if (!isAnswered) return s.answer_item
    if (answer === rightAnswer) {
      isCorrect = true
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
            Question {currentQuestionNumber + 1} of {questionQty}
          </h2>
          <p className={s.question_text}>{currentQuestionData.question}</p>
        </div>

        <div
          className={s.answer_area}
          style={isAnswered ? { pointerEvents: 'none', cursor: 'not-allowed' } : null}>
          {answersForOneQuestion.map((answer, i) => {
            return (
              <div className={getAnswerClass(answer)} key={i} onClick={() => handleAnswer(answer)}>
                {answer}
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

//   getSuffledArray(answersForOneQuestion);

//   return (
//     <>
//       <div className={s.question_wrapper}>
//         {/* другие элементы */}
//         <div className={s.answer_area}>
//           {answersForOneQuestion.map((answer, i) => (
//             <div
//               className={getAnswerClass(answer)}
//               key={i}
//               onClick={() => handleAnswer(answer)}
//             >
//               {answer}
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

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

// {

//   "questionQuiz": {
//       "queries": {
//           "getQuestions({\"categoryId\":\"9\",\"difficulty\":\"easy\",\"questionQty\":\"5\",\"type\":\"multiple\"})": {
//               "status": "fulfilled",
//               "endpointName": "getQuestions",
//               "requestId": "aDdKxFObgZoVR3QIHJXYH",
//               "originalArgs": {
//                   "questionQty": "5",
//                   "categoryId": "9",
//                   "difficulty": "easy",
//                   "type": "multiple"
//               },
//               "startedTimeStamp": 1708124315897,
//               "data": {
//                   "response_code": 0,
//                   "results": [
//                       {
//                           "type": "multiple",
//                           "difficulty": "easy",
//                           "category": "General Knowledge",
//                           "question": "Who invented the first ever chocolate bar, in 1847?",
//                           "correct_answer": "Joseph Fry",
//                           "incorrect_answers": [
//                               "Andrew Johnson",
//                               "John Cadbury",
//                               "John Tyler"
//                           ]
//                       },
//                       {
//                           "type": "multiple",
//                           "difficulty": "easy",
//                           "category": "General Knowledge",
//                           "question": "When one is &quot;envious&quot;, they are said to be what color?",
//                           "correct_answer": "Green",
//                           "incorrect_answers": [
//                               "Red",
//                               "Blue",
//                               "Yellow"
//                           ]
//                       },
//                       {
//                           "type": "multiple",
//                           "difficulty": "easy",
//                           "category": "General Knowledge",
//                           "question": "What nuts are used in the production of marzipan?",
//                           "correct_answer": "Almonds",
//                           "incorrect_answers": [
//                               "Peanuts",
//                               "Walnuts",
//                               "Pistachios"
//                           ]
//                       },
//                       {
//                           "type": "multiple",
//                           "difficulty": "easy",
//                           "category": "General Knowledge",
//                           "question": "What is &quot;dabbing&quot;?",
//                           "correct_answer": "A dance",
//                           "incorrect_answers": [
//                               "A medical procedure",
//                               "A sport",
//                               "A language"
//                           ]
//                       },
//                       {
//                           "type": "multiple",
//                           "difficulty": "easy",
//                           "category": "General Knowledge",
//                           "question": "Waluigi&#039;s first appearance was in what game?",
//                           "correct_answer": "Mario Tennis 64 (N64)",
//                           "incorrect_answers": [
//                               "Wario Land: Super Mario Land 3",
//                               "Mario Party (N64)",
//                               "Super Smash Bros. Ultimate"
//                           ]
//                       }
//                   ]
//               },
//               "fulfilledTimeStamp": 1708124316563
//           }
//       },

//   }
// }
