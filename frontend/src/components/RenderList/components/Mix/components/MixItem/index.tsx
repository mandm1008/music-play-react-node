import classNames from 'classnames/bind'
import styles from './MixItem.module.scss'
import { PlayIcon } from '~/components/Icons'

const cx = classNames.bind(styles)

function MixItem({ data }: { data: any }) {
  return (
    <div className={cx('wrapper')}>
      <img src={data.thumbnail} alt={data.title} className={cx('banner')} />

      <div className={cx('ctn')}>
        <div className={cx('play')}>
          <PlayIcon size={50} />
        </div>

        <div className={cx('content')}>
          <h3 className={cx('title')}>{data.artistsNames}</h3>

          <div className={cx('musics')}>Musics</div>
        </div>
      </div>
    </div>
  )
}

export default MixItem
