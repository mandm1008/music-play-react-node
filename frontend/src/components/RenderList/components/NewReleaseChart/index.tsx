import classNames from 'classnames/bind'
import { GoRightIcon } from '~/components/Icons'
import { Link } from 'react-router-dom'
import style from './NewRelease.module.scss'
import MusicItem from '~/components/MusicItem'
import SliderItem from '~/components/SliderItem'

const cx = classNames.bind(style)

function NewReleaseChart({ data }: { data: any }) {
  console.log(data)

  return (
    <div className={cx('container')}>
      <h1 className={cx('title')}>
        BXH Nhạc mới
        <Link className={cx('show')} to={data.link}>
          Tất cả <GoRightIcon size={16} className={cx('icon')} />
        </Link>
      </h1>

      <div className={cx('content')}>
        <SliderItem all={data.items.length} visible={3}>
          {data.items.map((item: any, index: number) => (
            <MusicItem key={index} data={item} rank={index + 1} />
          ))}
        </SliderItem>
      </div>
    </div>
  )
}

export default NewReleaseChart
