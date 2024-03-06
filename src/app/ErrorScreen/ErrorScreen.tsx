import { Link, useRouteError } from 'react-router-dom'
import s from './ErrorScreen.module.css'

interface ExtendedError extends Error {
  data?: string; 
  statusText?: string;
}

export const ErrorScreen: React.FC = () => {
const error = useRouteError() as ExtendedError;
  return (
    <>
      <h1>
        Sorry, smthg went wrong. 
      </h1>

      <h3>Maybe you've been made a mistake in URL or <strong>(you also could check below if provided) </strong></h3>
        
      {error.data && <h3 className='error'>{error.data}</h3>}
      {error && <h3>{error.message}</h3>}
      <h3>Dont worry, return to Main Page</h3>
      <h2>↓↓↓↓↓↓↓↓↓↓↓↓↓↓</h2>
      <button className={s.btn}>
        <Link to="/">RETURN TO MAIN PAGE</Link>
      </button>
    </>
  )
}
