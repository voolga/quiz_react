import s from './Circles.module.css'

export function Circles() {
  return (
    <>
      <div className={s.circle_wrapper}>
        {['green', 'yellow', 'orange', 'fuchsia', 'deepskyblue', 'blueviolet'].map(
          (item, i) => {
            return <div key={i} className={s.circle} style={{ backgroundColor: `${item}` }}></div>
          }
        )}
      </div>
    </>
  )
}
