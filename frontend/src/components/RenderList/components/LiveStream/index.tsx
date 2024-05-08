import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import styles from './LiveStream.module.scss'
import { GoLeftIcon, GoRightIcon } from '~/components/Icons'
import LiveStreamItem from './components/LiveStreamItem'
import SliderItem from '~/components/SliderItem'

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

      <SliderItem type="1" all={data.items.length} visible={6} auto={5}>
        {!!data.items && data.items.map((item: any, i: number) => <LiveStreamItem key={item.encodeId} data={item} />)}
      </SliderItem>
    </div>
  )
}

export default LiveStream
