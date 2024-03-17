import classNames from 'classnames/bind'
import { GoRightIcon } from '~/components/Icons'
import { Link } from 'react-router-dom'
import style from './NewRelease.module.scss'

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
    </div>
  )
}

export default NewReleaseChart
