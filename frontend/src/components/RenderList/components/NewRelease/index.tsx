import { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './NewRelease.module.scss'
import { GoRightIcon } from '~/components/Icons'
import MusicItem from '~/components/MusicItem'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

type CurrentType = 'all' | 'vPop' | 'others'

function NewRelease({ data }: { data: any }) {
  const [currentType, setCurrentType] = useState<CurrentType>('all')

  return (
    <div className={cx('wrapper')}>
      <h2 className={cx('title')}>{data.title}</h2>

      <div className={cx('ctn')}>
        <nav>
          <button className={cx('btn', { focus: currentType === 'all' })} onClick={() => setCurrentType('all')}>
            Tất cả
          </button>
          <button className={cx('btn', { focus: currentType === 'vPop' })} onClick={() => setCurrentType('vPop')}>
            Việt nam
          </button>
          <button className={cx('btn', { focus: currentType === 'others' })} onClick={() => setCurrentType('others')}>
            Quốc tế
          </button>

          <Link className={cx('show')} to={data.link + `?filter=${currentType.toLowerCase()}`}>
            Tất cả <GoRightIcon size={16} className={cx('icon')} />
          </Link>
        </nav>

        <div className={cx('body')}>
          {data &&
            data.items &&
            data.items[currentType].map((item: any) => <MusicItem key={item.encodeId} data={item} />)}
        </div>
      </div>
    </div>
  )
}

export default NewRelease
