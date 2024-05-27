import classNames from 'classnames/bind'
import styles from './Playlist.module.scss'
import { ClockIcon, MoreIcon } from '~/components/Icons'
import Button from '../Button'
import { MenuTippy } from '~/components/CustomTippy'
import { DATA_MENU } from './constant'
import { useMusic } from '~/hooks'
import MusicItem from '~/components/MusicItem'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import OnOff from '~/components/OnOff'
import { setAutoPlay } from '~/components/store/actions'

const cx = classNames.bind(styles)

function Playlist({ show }: { show: boolean }) {
  const [music, setMusic] = useMusic()
  const [mode, setMode] = useState(1)

  return (
    <div className={cx('wrapper', { active: show })}>
      <div className={cx('header')}>
        <div className={cx('choose')}>
          <span className={cx({ active: mode === 1 })}>Danh sách phát</span>
          <span className={cx({ active: mode === 2 })}>Nghe gần đây</span>
        </div>

        <Button content="Hẹn giờ dừng phát lại" size={32} placement="bottom" icon={{ Icon: ClockIcon, size: 16 }} />

        <MenuTippy noMG data={DATA_MENU}>
          <Button noMG content="Khác" size={32} placement="bottom" icon={{ Icon: MoreIcon, size: 16 }} />
        </MenuTippy>
      </div>

      <div className={cx('current')}>
        <MusicItem data={music.items[music.index]} width="100%" playlist primary />
      </div>

      <div className={cx('scrollbar')}>
        {music.items.slice(music.index + 1).length > 0 && (
          <div className={cx('auto-play', { fixed: music.items.slice(music.index + 1).length > 0 })}>
            <h3>Tiếp theo</h3>
            <p>
              Từ danh sách bài hát{' '}
              {music.playlistInfo ? (
                <Link style={{ color: 'var(--link-text-hover)' }} to={music.playlistInfo.link}>
                  {music.playlistInfo.title}
                </Link>
              ) : (
                <Link style={{ color: 'var(--link-text-hover)' }} to=".">
                  'Danh sách phát'
                </Link>
              )}
            </p>
          </div>
        )}

        <div className={cx('list')}>
          {music.items.slice(music.index + 1).map((item, index) => (
            <MusicItem key={index} data={item} width="100%" playlist />
          ))}
        </div>

        <div
          className={cx('auto-play', {
            fixed: music.items.slice(music.index + 1).length <= 0
          })}
        >
          <h3>Tự động phát</h3>
          <p>Danh sách bài hát gợi ý</p>
          <div className={cx('auto-play__button')}>
            <OnOff on={music.autoPlay} onClick={() => setMusic(setAutoPlay(!music.autoPlay))} />
          </div>
        </div>

        {music.autoPlay && (
          <div className={cx('list')}>
            {music.suggest.map((item, index) => (
              <MusicItem key={index} data={item} width="100%" playlist />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Playlist
