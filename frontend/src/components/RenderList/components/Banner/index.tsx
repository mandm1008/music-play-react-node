import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'

import styles from './Banner.module.scss'
import { GoLeftIcon, GoRightIcon } from '~/components/Icons'

const cx = classNames.bind(styles)

function Banner({ data }: { data: any }) {
  const [indexSlider, setIndexSlider] = useState(1)
  const [isAuto, setIsAuto] = useState(true)
  const [isNext, setIsNext] = useState(true)

  const prev = (prev: number) => (prev - 1 < 0 ? 5 : prev - 1)
  const next = (prev: number) => (prev + 1 > 5 ? 0 : prev + 1)

  useEffect(() => {
    const interval = isAuto
      ? setInterval(() => {
          setIndexSlider(isNext ? next : prev)
        }, 3000)
      : undefined

    return () => clearInterval(interval)
  }, [isAuto, isNext])

  function getIndex(i: number) {
    const sub = i - indexSlider
    if (sub < 0) return 6 + sub
    return sub
  }

  return (
    <div
      className={cx('wrapper', { next: isNext, prev: !isNext })}
      onMouseEnter={() => setIsAuto(false)}
      onMouseLeave={() => setIsAuto(true)}
    >
      <div
        className={cx('btn')}
        onClick={() => {
          setIsNext(false)
          setIndexSlider(prev)
        }}
      >
        <GoLeftIcon size={24} />
      </div>
      {data &&
        data.items &&
        data.items.map((item: any, i: number) => (
          <div key={i} className={cx('item', 'item-' + getIndex(i))}>
            <Link to={item.link}>
              <img src={item.banner} alt={item.banner} />
            </Link>
          </div>
        ))}
      <div
        className={cx('btn')}
        onClick={() => {
          setIsNext(true)
          setIndexSlider(next)
        }}
      >
        <GoRightIcon size={24} />
      </div>
    </div>
  )
}

export default Banner
