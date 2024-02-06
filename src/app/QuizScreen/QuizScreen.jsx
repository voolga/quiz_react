import { Question } from '../../components/Quiestion/Question'
import s from './QuizScreen.module.css'

export function QuizScreen() {
  return (
    <>
      <div className={s.container}>
        <div className={s.timer}>01:00</div>
        <Question />
        <button className={s.end_game}>End game</button>
      </div>
    </>
  )
}
