import { forwardRef, useEffect, useRef, useState } from 'react'
import useMusic from '~/hooks/useMusic'
import { getSong } from '~/servers'
import { setLoading, nextMusic, getSuggestMusic } from '../store/actions'
import { SET_TIME_MUSIC, VOLUME_CHANGE } from './events'

const Audio = forwardRef(function (props, ref: React.ForwardedRef<HTMLAudioElement>) {
  const [music, dispatch] = useMusic()
  const [link, setLink] = useState<string>()
  let audioElement = !ref || typeof ref === 'function' ? useRef<HTMLAudioElement>(null) : ref
  const runTimeData = useRef<string>()

  console.log(music)

  function onEndedEvent() {
    if (audioElement.current) {
      audioElement.current.currentTime = 0
      audioElement.current.pause()
      if (music.modeRepeat === 2) {
        return audioElement.current.play()
      }
      setLink(undefined)
      dispatch(nextMusic())
      dispatch(setLoading(true))
    }
  }

  useEffect(() => {
    if (music.items.length > 0) {
      if (music.items[music.index].encodeId !== runTimeData.current)
        if (music.items[music.index].isWorldWide)
          getSong(music.items[music.index].encodeId)
            .then((data) => data.data.data)
            .then((data) => {
              if (data) {
                setLink(data['128'])
                ;(async () => dispatch(await getSuggestMusic(music)))()
              } else {
                onEndedEvent()
              }
            })
            .catch(() => {
              onEndedEvent()
            })
        else {
          onEndedEvent()
        }
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
    if (music.play && link && !music.loading) {
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
      ref={!ref || typeof ref === 'function' ? audioElement : ref}
      src={link}
      onLoadedData={() => {
        dispatch(setLoading(false))
      }}
      onEnded={onEndedEvent}
    ></audio>
  )
})

export default Audio
