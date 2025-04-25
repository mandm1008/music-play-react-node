import classNames from 'classnames/bind'
import styles from './OnOff.module.scss'

const cx = classNames.bind(styles)

function OnOff({ on, onClick }: { on: boolean; onClick: () => void }) {
  return (
    <div className={cx('wrapper')} onClick={onClick}>
      <div className={cx('circle', { on })} />
    </div>
  )
}

export default OnOff
