import classNames from 'classnames/bind'
import { LegacyRef, useRef } from 'react'
import styles from './Range.module.scss'
import useMusic from '~/hooks/useMusic'

const cx = classNames.bind(styles)

function Range() {
  const [state, dispatch] = useMusic()
  const wrapperElement = useRef<HTMLDivElement>()

  return (
    <div className={cx('wrapper')}>
      <p className={cx('time')}>00:00</p>
      <div ref={wrapperElement as LegacyRef<HTMLDivElement>} className={cx('wrapper-range')}>
        <div className={cx('inner')}>
          <div
            style={{
              width: state.musics[state.musics.length - 1] + '%'
            }}
            className={cx('value')}
          ></div>
        </div>
      </div>
      <p className={cx('time', 'duration')}>00:00</p>
    </div>
  )
}

export default Range
