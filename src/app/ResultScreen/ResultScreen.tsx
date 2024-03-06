import s from './ResultScreen.module.css'
import { Circles } from '../../components/Circles/Circles'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { timeConverter } from '../../utils/timeConverter'
// import { GameSettings } from '../../types';


export function ResultScreen() {
  const gameSettings = useSelector((state) => state.settings)
  const spentTime = useSelector((state) => state.time.currentGameTime)
  const location = useLocation()

  let { categoryId, questionQty, difficulty, type} = gameSettings
  const correctAnswersValue = location.state.correctAnswersValue

  const [formattedMinutes, formattedSeconds] = timeConverter(spentTime)

  const category = categoryId ? location.state.category : 'Random'
  difficulty = difficulty || 'Random'
  type = type || 'Random'

  return (
    <>
      <div className={s.container}>
        <div className={s.game_over}>Game over!</div>
        <div className={s.result_wrapper}>
          <div className={s.result_text_area}>
            <Circles />
            <h2 className={s.question_header}>Good job! Your results:</h2>
            <p>
              You answered correctly on {correctAnswersValue} from {questionQty} questions.
            </p>
          </div>

          <div className={s.result_config_area}>
            <div className={s.result_config_item}>Category: {category}</div>
            <div className={s.result_config_item}>Difficulty: {difficulty}</div>
            <div className={s.result_config_item}>Type: {type}</div>
            <div className={s.result_config_item}>
              Time: {formattedMinutes}м {formattedSeconds}с
            </div>
          </div>
        </div>
        <div className={s.btns_wrapper}>
          <Link to={'/quiz'} className={s.btn}>
            Restart
          </Link>
          <Link to={'/'} className={s.btn}>
            Start new game
          </Link>
        </div>
      </div>
    </>
  )
}
