import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './RTChar.module.scss'
import Chart from './components/Chart'
import MusicItem from '~/components/MusicItem'
import { PlayNoIcon } from '~/components/Icons'
import { getRankColor } from '~/tools'

const cx = classNames.bind(styles)

function RTChart({ data }: { data: any }) {
  console.log(data)
  const percents = data.items.map((item: any, i: number) => ({
    encodeId: item.encodeId,
    percent:
      i < 2
        ? Math.ceil((item.score / data.chart.totalScore) * 100)
        : Math.floor((item.score / data.chart.totalScore) * 100)
  }))

  return (
    <div className={cx('overplay')}>
      <div className={cx('wrapper')}>
        <div className={cx('content')}>
          <h2 className={cx('title')}>
            <Link to="zing-chart">#zingchart</Link>

            <button className={cx('icon')}>
              <PlayNoIcon size={14} />
            </button>
          </h2>

          <div className={cx('songs')}>
            {data.items.slice(0, 3).map((item: any, i: number) => (
              <MusicItem
                key={item.encodeId}
                data={item}
                chart={{
                  rank: i,
                  color: getRankColor(i),
                  percent: percents[i].percent
                }}
              />
            ))}
          </div>

          <Link to="zing-chart" className={cx('more')}>
            Xem thêm
          </Link>
        </div>

        <div className={cx('chart')}>
          <Chart data={data.chart} percents={percents} />
        </div>
      </div>
    </div>
  )
}

export default RTChart
