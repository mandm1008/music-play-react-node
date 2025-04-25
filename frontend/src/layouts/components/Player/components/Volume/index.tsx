import classNames from 'classnames/bind'
import styles from '../../Player.module.scss'
import { useEffect, useState } from 'react'
import { VOLUME_CHANGE } from '~/components/Audio/events'

const cx = classNames.bind(styles)

function Volume() {
  const [volume, setVolume] = useState(0)

  useEffect(() => {
    const audioElement = document.querySelector<HTMLAudioElement>('audio')

    setVolume(audioElement ? audioElement.volume * 100 : 100)
  }, [])

  function dispatchVolume(volume: number) {
    window.dispatchEvent(new CustomEvent(VOLUME_CHANGE, { detail: { value: volume } }))
  }

  return (
    <input
      className={cx('volume-input')}
      type="range"
      value={volume}
      min={0}
      max={100}
      step={1}
      onChange={(e) => {
        setVolume(parseInt(e.target.value))
        dispatchVolume(parseInt(e.target.value))
      }}
      style={{ cursor: 'pointer' }}
    />
  )
}

export default Volume
