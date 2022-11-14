import { useLocation, Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './Item.module.scss'

const cx = classNames.bind(styles)

function Item({
  icon,
  image,
  title,
  to,
  href,
  play: Play,
  active,
  sizePlay,
  live,
  className,
  ...any
}: {
  icon?: Icon
  image?: string
  title?: string
  to?: string
  href?: string
  play?: IconFun
  active?: boolean
  sizePlay?: number
  live?: string
  className?: string
}) {
  const Item = to ? Link : href ? 'a' : 'button'
  const crrPath = useLocation()

  const Icon = icon && icon.icon
  const size = (icon && icon.size) || 24

  const props = {
    href,
    ...any
  }

  return (
    <Item
      to={to as string}
      className={cx('wrapper', {
        active: to === crrPath.pathname,
        [className as any]: className
      })}
      {...props}
    >
      {Icon && <Icon size={size} />}
      {image && <img src={image} alt={title} />}
      <p className={cx('title')}>{title}</p>
      {live && <img src={live} alt="Live" />}
      {Play && <Play size={sizePlay || 20} className={cx('play-icon', { active })} />}
    </Item>
  )
}

export default Item
