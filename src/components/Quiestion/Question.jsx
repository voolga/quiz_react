import s from './Question.module.css'
import questionData from '../questionData'
import { Circles } from '../Circles/Circles'
import { ProgressBar } from '../ProgressBar/ProgressBar'

export function Question() {
  return (
    <>
      <div className={s.question_wrapper}>
        <ProgressBar />
        <div className={s.question_area}>
          {/* <Circles /> */}
          <h2 className={s.question_header}>Question 3 of 7</h2>
          <p className="question_text">{questionData.text}</p>
        </div>

        <div className={s.answer_area}>
          {questionData.options.map((item, i) => {
            return (
              <div className={s.answer_item} key={i}>
                {item}
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
