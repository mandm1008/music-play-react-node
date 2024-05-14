import { useEffect, useRef, useState } from 'react'
import useMusic from '~/hooks/useMusic'
import { getSong } from '~/servers'
import { setLoading, nextMusic } from '../store/actions'
import { SET_TIME_MUSIC, VOLUME_CHANGE } from './events'

function Audio() {
  const [music, dispatch] = useMusic()
  const [link, setLink] = useState<string>()
  const audioElement = useRef<HTMLAudioElement>(null)
  const runTimeData = useRef<string>()

  console.log(music)

  function onEndedEvent() {
    console.log(audioElement)
    if (audioElement.current) {
      audioElement.current.currentTime = 0
      audioElement.current.pause()
      if (music.modeRepeat === 2) {
        return audioElement.current.play()
      }
      dispatch(nextMusic())
    }
  }

  useEffect(() => {
    if (music.items.length > 0) {
      if (music.items[music.index].encodeId !== runTimeData.current)
        getSong(music.items[music.index].encodeId)
          .then((data) => data.data.data)
          .then((data) => {
            if (data) {
              dispatch(setLoading(true))
              setLink(data['128'])
            } else {
              onEndedEvent()
            }
          })
          .catch(() => {
            onEndedEvent()
          })
    } else {
      setLink(undefined)
    }

    return () => {
      if (music.items.length > 0) runTimeData.current = music.items[music.index].encodeId
    }
  }, [music])

  useEffect(() => {
    function handler(event: CustomEventInit) {
      if (event.detail?.time) {
        if (audioElement.current !== null) audioElement.current.currentTime = event.detail.time
      }
    }

    window.addEventListener(SET_TIME_MUSIC, handler)
    return () => window.removeEventListener(SET_TIME_MUSIC, handler)
  }, [link])

  useEffect(() => {
    if (music.play && link) {
      audioElement.current !== null && audioElement.current.play()
    } else {
      audioElement.current !== null && audioElement.current.pause()
    }
  }, [link, music])

  useEffect(() => {
    function listenVolumeChange(event: CustomEventInit) {
      if (audioElement.current) audioElement.current.volume = event.detail.value / 100
    }

    window.addEventListener(VOLUME_CHANGE, listenVolumeChange)

    return () => {
      window.removeEventListener(VOLUME_CHANGE, listenVolumeChange)
    }
  }, [])

  return (
    <audio
      ref={audioElement}
      src={link}
      onLoadedData={() => {
        dispatch(setLoading(false))
      }}
      onEnded={onEndedEvent}
    ></audio>
  )
}

export default Audio
