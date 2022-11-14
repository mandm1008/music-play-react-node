import Tippy from '@tippyjs/react/headless'
import { Placement } from 'tippy.js'
import classNames from 'classnames/bind'

import styles from './MenuTippy.module.scss'
import Item from '~/layouts/components/SideBar/components/Item'
import Spacer from '~/layouts/components/Spacer'

const cx = classNames.bind(styles)

interface DataMenuTippy {
  icon: Icon
  title: string
  play: IconFun
  props: {
    to?: string
    href?: string
  }
  sub?: boolean
}

interface Space {
  spacer?: boolean
}

function MenuTippy({
  data,
  children,
  placement = 'bottom-end'
}: {
  data: (DataMenuTippy & Space)[]
  children: React.ReactNode
  placement?: Placement
}) {
  return (
    <Tippy
      interactive
      trigger="click"
      placement={placement}
      render={(attrs) => (
        <div className={cx('menu-tippy')} tabIndex={-1} {...attrs}>
          {data.map((item, i) =>
            item.spacer ? (
              <Spacer key={i} fullWidth />
            ) : (
              <Item
                key={i}
                {...item.props}
                className={cx('menu-item', {
                  submenu: item.sub
                })}
                icon={item.icon}
                title={item.title}
                play={item.play}
                active
                sizePlay={16}
              />
            )
          )}
        </div>
      )}
    >
      <div className={cx('tippy')}>{children}</div>
    </Tippy>
  )
}

export default MenuTippy
