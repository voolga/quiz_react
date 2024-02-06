import s from './Circles.module.css'

export function Circles() {
  return (
    <>
      <div className={s.circle_wrapper}>
        {['green', 'yellow', 'orange', 'fuchsia', 'deepskyblue', 'blueviolet'].map(
          (item) => {
            return <div className={s.circle} style={{ backgroundColor: `${item}` }}></div>
          }
        )}
      </div>
    </>
  )
}
