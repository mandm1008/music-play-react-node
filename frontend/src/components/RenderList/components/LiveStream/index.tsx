import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import styles from './LiveStream.module.scss'
import { GoLeftIcon, GoRightIcon } from '~/components/Icons'
import LiveStreamItem from './components/LiveStreamItem'

const cx = classNames.bind(styles)

function LiveStream({ data }: { data: any }) {
  return (
    <div className={cx('wrapper')}>
      <h2 className={cx('title')}>
        {data.title}
        <Link to={data.link} className={cx('all')}>
          Tất cả
          <GoRightIcon size={16} className={cx('icon')} />
        </Link>
      </h2>

      <div className={cx('inner')}>
        <button className={cx('nav', 'disable')}>
          <GoLeftIcon size={18} />
        </button>

        <div className={cx('content')}>
          {!!data.items && data.items.map((item: any, i: number) => <LiveStreamItem key={item.encodeId} data={item} />)}
        </div>

        <button className={cx('nav')}>
          <GoRightIcon size={18} />
        </button>
      </div>
    </div>
  )
}

export default LiveStream
