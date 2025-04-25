import classNames from 'classnames/bind'
import { useRef, useState } from 'react'
import {
  StarFullIcon,
  LikeFullIcon,
  MoreIcon,
  KaraokeIcon,
  RestoreIcon,
  MvIcon,
  VolumeIcon,
  ListMusicIcon,
  ShuffleIcon,
  PrevIcon,
  PlayIcon,
  NextIcon,
  PauseIcon,
  RepeatIcon,
  RepeatOneIcon
} from '~/components/Icons'
import images from '~/assets/images'
import Range from '~/components/Range'
import Button from './components/Button'
import styles from './Player.module.scss'
import useMusic from '~/hooks/useMusic'
import { modeRepeat, nextMusic, prevMusic, toggleMusic, toggleShuffle } from '~/components/store/actions'
import ArtistItem from '~/components/ArtistItem'
import MusicMoreSetting from '~/components/MusicItem/components/MusicMoreSetting'
import Volume from './components/Volume'
import Playlist from './components/Playlist'
import Audio from '~/components/Audio'

const cx = classNames.bind(styles)

function Player() {
  const [music, dispatch] = useMusic()
  const currentMusic = music.items[music.index]
  const [showPlaylist, setShowPlaylist] = useState(false)
  const audioElement = useRef<HTMLAudioElement>(null)

  function togglePlaylist() {
    setShowPlaylist((prev) => !prev)
  }

  function prev() {
    audioElement.current && audioElement.current.pause()
    dispatch(prevMusic())
  }

  function play() {
    dispatch(toggleMusic())
  }

  function next() {
    if (audioElement.current) {
      audioElement.current.pause()
    }
    dispatch(nextMusic())
  }

  return (
    currentMusic && (
      <div className={cx('wrapper')}>
        <div className={cx('info')}>
          <img src={currentMusic.thumbnail} alt={currentMusic.title} />
          <div className={cx('info-content')}>
            <h4>{currentMusic.title}</h4>
            <p className={cx('info-singer')}>
              {currentMusic.artists
                .map((item: any, i: number) => <ArtistItem key={i} data={item} />)
                .reduce((prev: any, curr: any) => (prev.length > 0 ? [...prev, ', ', curr] : [curr]), [])}
              <StarFullIcon className={cx('info-icon-star')} size={10} />
            </p>
          </div>
          <div className={cx('info-menu')}>
            <Button
              primary
              content="Xoá khỏi thư viện"
              placement="top"
              size={32}
              icon={{ Icon: LikeFullIcon, size: 16 }}
            />
            <MusicMoreSetting data={currentMusic} note="Xem thêm">
              <Button placement="top" size={32} icon={{ Icon: MoreIcon, size: 16 }} />
            </MusicMoreSetting>
          </div>
        </div>

        <div className={cx('controls-wrapper')}>
          <div className={cx('controls')}>
            <Button
              content="Trộn"
              placement="top"
              size={32}
              icon={{ Icon: ShuffleIcon, size: 16 }}
              primary={music.shuffle}
              onClick={() => {
                dispatch(toggleShuffle())
              }}
            />

            <Button size={32} icon={{ Icon: PrevIcon, size: 16 }} onClick={prev} style={{ marginLeft: '10px' }} />

            <Button
              hoverPrimary
              size={50}
              icon={
                !music.loading || !music.play
                  ? {
                      Icon: music.play ? PauseIcon : PlayIcon,
                      size: 40
                    }
                  : undefined
              }
              image={music.loading && music.play ? { src: images.loading, alt: 'Loading...' } : undefined}
              onClick={play}
            />

            <Button size={32} icon={{ Icon: NextIcon, size: 16 }} onClick={next} />

            <Button
              content={
                music.modeRepeat === 0
                  ? 'Bật phát lại tất cả'
                  : music.modeRepeat === 1
                  ? 'Bật phát lại một bài'
                  : 'Tắt phát lại'
              }
              placement="top"
              size={32}
              icon={{ Icon: music.modeRepeat >= 2 ? RepeatOneIcon : RepeatIcon, size: 16 }}
              primary={music.modeRepeat > 0}
              onClick={() => {
                dispatch(modeRepeat())
              }}
            />
          </div>
          <div className={cx('time-box')}>
            <Range />
          </div>
        </div>

        <div className={cx('actions')}>
          <Button noMG content="MV" placement="top" size={30} icon={{ Icon: MvIcon, size: 20 }} />
          <Button noMG content="Xem lời bài hát" placement="top" size={30} icon={{ Icon: KaraokeIcon, size: 16 }} />
          <Button noMG content="Chế độ cửa sổ" placement="top" size={30} icon={{ Icon: RestoreIcon, size: 16 }} />
          <Button noMG size={30} icon={{ Icon: VolumeIcon, size: 16 }} />
          <Volume />
          <div className={cx('spacer')}></div>
          <Button
            className={cx('list-music')}
            content="Danh sách phát"
            placement="top"
            size={30}
            icon={{ Icon: ListMusicIcon, size: 16 }}
            noMG
            onClick={togglePlaylist}
          />
        </div>

        <Playlist show={showPlaylist} />

        <Audio ref={audioElement} />
      </div>
    )
  )
}

export default Player
