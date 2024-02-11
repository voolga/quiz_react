import s from './ProgressBar.module.css'

export function ProgressBar() {
  let progress = '67%'

  return (
    <>
      <div className={s.progress_bar_container}>
        <div className={s.progress_bar} style={{ width: `${progress}` }}></div>
      </div>
    </>
  )
}
