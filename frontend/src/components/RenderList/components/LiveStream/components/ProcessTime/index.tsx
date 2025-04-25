import { useEffect, useState } from 'react'

const dashArray = 306.3052837250048
function ProcessTime({ startTime, endTime }: { startTime: number; endTime: number }) {
  const duration = endTime - startTime
  const [time, setTime] = useState(getPercent())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getPercent())
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  function getPercent() {
    const number = (endTime - Date.now()) / duration

    return number > 0 ? number : 0
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100">
      <circle fill="none" stroke="rgba(255, 255, 255, 0.2)" cx="50" cy="50" r="48.75" strokeWidth="2.5"></circle>

      <circle
        fill="none"
        stroke="#ff4b4a"
        cx="50"
        cy="50"
        r="48.75"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray={dashArray}
        strokeDashoffset={dashArray * time}
        style={{ transition: 'stroke-dashoffset 850ms ease-in-out 0s' }}
      ></circle>
    </svg>
  )
}

export default ProcessTime
