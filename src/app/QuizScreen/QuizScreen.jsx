import { useState, useEffect } from 'react'
import { Question } from '../../components/Quiestion/Question'
import s from './QuizScreen.module.css'
import { Link, Outlet, useNavigate } from 'react-router-dom'

export function QuizScreen() {
  return (
    <>
      <div className={s.container}>
        <div className={s.timer}>01:00</div>
        <Question />
        <Link to={'/quiz/modal'} className={s.end_game}>
          End game
        </Link>
      </div>
      <Outlet/>
    </>
  )
}
