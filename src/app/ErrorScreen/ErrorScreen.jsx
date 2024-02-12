import { Link, useRouteError } from 'react-router-dom'
import s from './ErrorScreen.module.css'

export function ErrorScreen() {
  const error = useRouteError()
  return (
    <>
      <h1>
        Sorry, smthg went wrong. 
      </h1>
      <h3>Maybe you've been made a mistake in URL or <strong>(and what more likely) </strong>
        we just didnt create this page yet.</h3>
      <h3>Dont worry, return to Main Page</h3>
      <h2>↓↓↓↓↓↓↓↓↓↓↓↓↓↓</h2>
      <button className={s.btn}>
        <Link to="/">RETURN TO MAIN PAGE</Link>
      </button>
    </>
  )
}
