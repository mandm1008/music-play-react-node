import classNames from 'classnames/bind'
import styles from './Footer.module.scss'

const cx = classNames.bind(styles)

function Footer() {
  return (
    <footer>
      <h2>Đối tác âm nhạc</h2>
      <div className="logo_list"></div>
    </footer>
  )
}

export default Footer
