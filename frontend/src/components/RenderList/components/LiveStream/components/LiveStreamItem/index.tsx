import classNames from 'classnames/bind'
import images from '~/assets/images'
import { PlayIcon } from '~/components/Icons'
import { getK } from '~/tools'
import styles from './LiveStreamItem.module.scss'
import ProcessTime from '../ProcessTime'

const cx = classNames.bind(styles)

function LiveStreamItem({ data }: { data: any }) {
  console.log(data)

  return (
    <div className={cx('wrapper')}>
      <div className={cx('banner')}>
        <div className={cx('background')}>
          <img src={data.program.thumbnail} alt={data.title} width="100%" />
        </div>

        <div className={cx('inner')}>
          <ProcessTime
            startTime={Date.now() - Math.floor(Math.random() * 1000 * 60 * 10)}
            endTime={Date.now() + Math.floor(Math.random() * 1000 * 60 * 10)}
          />
        </div>

        <div className={cx('play')}>
          <PlayIcon size={45} />
        </div>

        <span className={cx('live')}>
          <img src={images.live} alt="live" />
        </span>

        <div className={cx('thumbnail')}>
          <img src={data.host.thumbnail} alt={data.host.name} />
        </div>
      </div>

      <div className={cx('content')}>
        <h3 className={cx('title')}>{data.host.name}</h3>

        <p className={cx('listen')}>{getK(data.activeUsers)} đang nghe</p>
      </div>
    </div>
  )
}

export default LiveStreamItem
