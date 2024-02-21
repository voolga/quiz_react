import s from './StatisticScreen.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect, useRef } from 'react'

import { Link } from 'react-router-dom'
import { clearMyStat } from '../../redux/reducers/statReducer'
import { Timer } from '../../components/Timer/Timer'

export function StatisticScreen() {
  const ref = useRef(null)
  const [hasDiv, setHasDiv] = useState(true)
  const dispatch = useDispatch()
  function clearStat() {
    dispatch(clearMyStat())
  }

  useEffect(() => {
    setHasDiv(ref.current.querySelector('div') !== null)
  }, [])

  const gameStat = useSelector((state) => state.stat)
  const percentOfCorrect = (gameStat.correctAnswers / gameStat.totalQuestionsQty * 100).toFixed(2)

  return (
    <>
      <div className={s.container}>
        <div className={s.stat_wrapper}>
          <h1 className={s.stat_header}>Statistics</h1>
          <div className={s.stat_area}>

          <div className={s.stat_item}>
              <h2 className={s.stat_item_header}>Total answered:</h2>
              <div className={s.stat_item_content}>
                {gameStat.totalQuestionsQty}
              </div>
            </div>

            <div className={s.stat_item}>
              <h2 className={s.stat_item_header}>Correct answers:</h2>
              <div className={s.stat_item_content}>
                {gameStat.correctAnswers} 
                <br />
                ({percentOfCorrect}%)
              </div>
            </div>


            <div className={s.stat_item}>
              <h2 className={s.stat_item_header}>Categories:</h2>
              <div className={s.stat_item_content} ref={ref}>
                {hasDiv ? (
                  Object.entries(gameStat.categoriesId).map((item, i) => {
                    return (
                      <div key={i}>
                        {item[0]}: {item[1]}
                      </div>
                    )
                  })
                ) : (
                  <p>Пока вы ни во что не сыграли</p>
                )}
              </div>
            </div>
            <div className={s.stat_item}>
              <h2 className={s.stat_item_header}>Difficulty:</h2>

              <div className={s.stat_item_content}>
                {Object.entries(gameStat.difficulty).map((item, i) => {
                  return (
                    <div key={i}>
                      {item[0]}: {item[1]}
                    </div>
                  )
                })}
              </div>
            </div>
            <div className={s.stat_item}>
              <h2 className={s.stat_item_header}>Type:</h2>

              <div className={s.stat_item_content}>
                {Object.entries(gameStat.types).map((item, i) => {
                  return (
                    <div key={i}>
                      {item[0]}: {item[1]}
                    </div>
                  )
                })}
              </div>
            </div>
            <div className={s.stat_item}>
              <h2 className={s.stat_item_header}>Time spent:</h2>

              <div className={s.stat_item_content}>
                0 минут 0 секунд</div>
            </div>
          </div>
        </div>
        <div className={s.btns_wrapper}>
          <button onClick={clearStat} className={`${s.btn} ${s.reset_btn}`}>
            CLEAR MY STAT
          </button>
          <Link to={'/'} className={s.btn}>
            start new game
          </Link>
        </div>
      </div>
    </>
  )
}
