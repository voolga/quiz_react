import { Button } from '../Button/Button'
import { Link, Outlet, useNavigate } from 'react-router-dom'

import s from './ModalWindow.module.css'

export function ModalWindow() {
  return (
    <>
      <div className={s.container}>
        <div className={s.dialog}>
          <div className={s.content}>
            <p className={s.title}>Are you sure?</p>
            <button className={s.close_modal}>x</button>
            <div className={s.btns}>
              <Link to={'/quiz'} className={s.btn}>No, return</Link>
              <Link to={'/'} className={s.btn}>Yes, end game</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
