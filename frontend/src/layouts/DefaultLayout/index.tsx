import classNames from 'classnames/bind'

import styles from './DefaultLayout.module.scss'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import Player from '../components/Player'
import useMusic from '~/hooks/useMusic'

const cx = classNames.bind(styles)

function DefaultLayout({ children }: { children: React.ReactNode }) {
  const [music] = useMusic()
  const currentMusic = music.items[music.index]

  return (
    <div className={cx('wrapper', { ['hidden-player']: !currentMusic })}>
      <div className={cx('sidebar')}>
        <SideBar />
      </div>

      <div className={cx('content')}>
        <Header />
        <div className={cx('inner')}>{children}</div>
      </div>

      <div className={cx('player')}>
        <Player />
      </div>
    </div>
  )
}

export default DefaultLayout
