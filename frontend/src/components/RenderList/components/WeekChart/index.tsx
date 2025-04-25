import classNames from 'classnames/bind'
import style from './WeekChart.module.scss'
import { Link } from 'react-router-dom'

const cx = classNames.bind(style)

function WeekChart({ data }: { data: any }) {
  return (
    <div className={cx('container')}>
      {data.items.map(
        (
          item: { link: string | undefined; banner: string | undefined; country: string | undefined },
          index: number
        ) => (
          <Link key={index} className={cx('item')} to={item.link ? item.link : '#'}>
            <img src={item.banner} alt={item.country} className={cx('item-banner')} />
          </Link>
        )
      )}
    </div>
  )
}

export default WeekChart
