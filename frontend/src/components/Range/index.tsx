import classNames from 'classnames/bind'
import { useEffect, useRef, useState } from 'react'
import styles from './Range.module.scss'
import useMusic from '~/hooks/useMusic'
import { SET_TIME_MUSIC } from '../Audio/events'

const cx = classNames.bind(styles)

function Range() {
  const [music] = useMusic()
  const [duration, setDuration] = useState(0)
  const [time, setTime] = useState(0)
  const innerElement = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const audioElement = document.querySelector<HTMLAudioElement>('audio[src]')

    const interval = setInterval(() => {
      if (audioElement !== null) {
        if (Number.isNaN(audioElement.duration) || Number.isNaN(audioElement.currentTime)) return
        setDuration(audioElement.duration)
        setTime(audioElement.currentTime)
      }
    }, 500)

    return () => {
      clearInterval(interval)
    }
  }, [music])

  function getTime(time: number) {
    const hh = Math.floor(time / (60 * 60))
    time -= hh * 60 * 60
    const mm = Math.floor(time / 60)
    time -= mm * 60
    const ss = Math.floor(time)

    function twoNumber(number: number) {
      return number < 10 ? `0${number}` : number
    }

    return hh ? `${hh}:${twoNumber(mm)}:${twoNumber(ss)}` : `${twoNumber(mm)}:${twoNumber(ss)}`
  }

  function percent() {
    return (time / duration) * 100
  }

  function handler(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const offset = (event.screenX - (innerElement.current?.offsetLeft || 0)) / (innerElement.current?.offsetWidth || 1)
    const time = Math.floor(offset * duration)

    window.dispatchEvent(new CustomEvent(SET_TIME_MUSIC, { detail: { time } }))
    setTime(time)
  }

  return (
    <div className={cx('wrapper')}>
      <p className={cx('time')}>{getTime(time)}</p>
      <div className={cx('wrapper-range')}>
        <div ref={innerElement} className={cx('inner')} onClick={handler}>
          <div className={cx('value')} style={{ width: `${percent()}%` }}></div>
        </div>
      </div>
      <p className={cx('time', 'duration')}>{getTime(duration)}</p>
    </div>
  )
}

export default Range
