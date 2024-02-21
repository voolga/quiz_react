import { useState, useEffect, useRef } from 'react'
import s from './Timer.module.css'

function useCurrentTime(updateInterval, enabling, callback) {
  const callBackRef = useRef(callback)
  callBackRef.current = callback

  const [now, setNow] = useState(Date.now())
  useEffect(() => {
    setNow(Date.now())
    callBackRef.current?.(Date.now())

    const interval = setInterval(() => {
      setNow(Date.now())
      callBackRef.current?.(Date.now())
    }, updateInterval)

    return () => {
      clearInterval(interval)
    }
  }, [updateInterval, enabling])

  return now
}

export function Timer({ handleTimeRemaining, start, settedTime }) {
  const [startTime, setStartTime] = useState()

  const currentTime = useCurrentTime(1000, startTime)

  const passedFromStart = currentTime - (startTime ?? currentTime)

  const countDown = Math.max(0, settedTime - passedFromStart)
  const totalSeconds = Math.ceil(countDown / 1000)
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60

  const formattedMinutes = minutes.toString().padStart(2, '0')
  const formattedSeconds = seconds.toString().padStart(2, '0')

  const isLastFiveSeconds = totalSeconds <= 5

  useEffect(() => {
    if (start) {
      startTimer()
    }
  }, [start])

  const startTimer = () => {
    if (startTime) {
      setStartTime()
    } else {
      setStartTime(Date.now())
    }
  }

  const isTimerEnd = countDown === 0

  useEffect(() => {
    if (isTimerEnd) {
      handleTimeRemaining()
    }
  }, [isTimerEnd])

  const timerClasses = isLastFiveSeconds ? `${s.blink}` : ''

  return (
    <>
      <div className={timerClasses} style={{ color: isLastFiveSeconds ? '#b61515' : 'inherited' }}>
        {formattedMinutes}:{formattedSeconds}
      </div>
    </>
  )
}
