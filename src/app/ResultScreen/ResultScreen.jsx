import s from './ResultScreen.module.css'
import inputs from '../../components/inputsData'
import { Button } from '../../components/Button/Button'
import { Circles } from '../../components/Circles/Circles'
import resultBtns from '../../components/resultButtonsData'

export function ResultScreen() {
  return (
    <>
      <div className={s.container}>
        <div className={s.game_over}>Game over!</div>
        <div className={s.result_wrapper}>
          <div className={s.result_text_area}>
            <Circles />
            <h2 className={s.question_header}>Thanks for completing this quiz. Your results:</h2>
            <p className="question_text">
              You answered correctly on 5 from 10 questions in 7 minutes.
              <br />
              <span> Your quiz parameters are below:</span>
            </p>
          </div>

          <div className={s.result_config_area}>
            {Object.values(inputs).map((item, i) => (
              <div className={s.result_config_item} key={i}>
                {item.id}
              </div>
            ))}
          </div>
        </div>
        <div className={s.btns_wrapper}>
          {Object.values(resultBtns).map((item, index) => (
            <Button className={s.btn} key={index} {...item} />
          ))}
        </div>
      </div>
    </>
  )
}
