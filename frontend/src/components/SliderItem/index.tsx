import classNames from 'classnames/bind'
import style from './SilderItem.module.scss'
import { GoLeftIcon, GoRightIcon } from '~/components/Icons'
import { useEffect, useState } from 'react'

const cx = classNames.bind(style)

function SliderItem({
  type,
  visible,
  all,
  children,
  auto
}: {
  type?: string
  visible: number
  all: number
  children: any
  auto?: number
}) {
  const [index, setIndex] = useState(0)
  const duration = all - visible

  useEffect(() => {
    const contentElement = document.querySelectorAll<HTMLElement>(`.${cx('content')} > *`)
    if (contentElement) {
      contentElement.forEach((element) => {
        element.style.translate = `-${100 * index}% 0`
      })
    }
  }, [index])

  // useEffect(() => {
  //   if (auto && auto > 0) {
  //     const interval = setInterval(() => {
  //       setIndex((index) => (index >= duration - 1 ? 0 : index + 1))
  //     }, auto * 1000)

  //     return () => clearInterval(interval)
  //   }
  // }, [auto])

  function goLeft() {
    if (index === 0) return
    setIndex(index - 1)
  }

  function goRight() {
    if (index >= duration - 1) return
    setIndex(index + 1)
  }

  return (
    <div className={cx('container')}>
      <button className={cx('nav', index == 0 && 'disable')} onClick={goLeft}>
        <GoLeftIcon size={18} />
      </button>

      <div
        className={cx('content')}
        style={{
          ['--item-size' as string]: `${100 / visible}%`
        }}
      >
        {children}
      </div>

      <button className={cx('nav', index >= duration - 1 && 'disable')} onClick={goRight}>
        <GoRightIcon size={18} />
      </button>
    </div>
  )
}

export default SliderItem
