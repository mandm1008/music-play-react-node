import classNames from 'classnames/bind'
import styles from './Spacer.module.scss'

const cx = classNames.bind(styles)

function Spacer({ fullWidth }: { fullWidth?: boolean }) {
  return (
    <span
      className={cx('spacer', {
        ['full-width' as any]: fullWidth
      })}
    ></span>
  )
}

export default Spacer
