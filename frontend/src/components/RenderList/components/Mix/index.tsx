import classNames from 'classnames/bind'
import styles from './Mix.module.scss'
import MixItem from './components/MixItem'

const cx = classNames.bind(styles)

function Mix({ data }: { data: any }) {
  return (
    <div className={cx('wrapper')}>
      <h2 className={cx('title')}>{data.title}</h2>

      <div className={cx('content')}>
        {data.items.slice(0, 4).map((item: any) => (
          <MixItem key={item.encodeId} data={item} />
        ))}
      </div>
    </div>
  )
}

export default Mix
