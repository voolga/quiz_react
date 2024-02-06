import s from './ProgressBar.module.css'

export function ProgressBar() {
  let progress = '67%'

  return (
    // <div class={s.container}>
    //   <div class={s.container__progressbars}>
    //     <div class={s.progressbar}>
    //       <svg class={s.progressbar__svg}>
    //         <circle
    //           cx="80"
    //           cy="80"
    //           r="70"
    //           className={`${s.progressbar__svg_circle} ${s.circle_html} ${s.shadow_html}`}
    //           style={{ animation: 'anim_circle_html 2s linear forwards' }}>
    //         </circle>
    //       </svg>
    //       <span className={`${s.progressbar__text} ${s.shadow_html}`}></span>
    //     </div>
    //   </div>
    // </div>

    <>
      <div className={s.progress_bar_container}>
        <div className={s.progress_bar} style={{ width: `${progress}` }}></div>
      </div>
    </>
  )
}
