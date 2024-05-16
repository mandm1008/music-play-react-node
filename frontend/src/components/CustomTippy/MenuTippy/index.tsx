import { forwardRef } from 'react'
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
  play?: IconFun
  props?: {
    to?: string
    href?: string
    onCLick?: () => any
  }
  sub?: boolean
  component?: (key: number) => React.ReactNode
  className?: string
}

interface Space {
  spacer?: boolean
}

function MenuTippy(
  {
    data,
    children,
    placement = 'bottom-end'
  }: {
    data: (DataMenuTippy & Space)[]
    children: React.ReactNode
    placement?: Placement
  },
  ref: any
) {
  return (
    <Tippy
      ref={ref}
      appendTo={() => document.body}
      interactive
      trigger="click"
      placement={placement}
      render={(attrs) => (
        <div className={cx('menu-tippy')} tabIndex={-1} {...attrs}>
          {data.map(
            (item, i) =>
              (item.component && item.component(i)) ||
              (item.spacer ? (
                <Spacer key={i} fullWidth />
              ) : (
                <Item
                  key={i}
                  {...item.props}
                  className={cx('menu-item', {
                    submenu: item.sub,
                    [item.className as any]: item.className
                  })}
                  icon={item.icon}
                  title={item.title}
                  play={item.play}
                  active
                  sizePlay={16}
                />
              ))
          )}
        </div>
      )}
    >
      <div className={cx('tippy')}>{children}</div>
    </Tippy>
  )
}

export default forwardRef(MenuTippy)
