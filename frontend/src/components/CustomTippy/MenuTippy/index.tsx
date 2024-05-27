import React, { forwardRef } from 'react'
import Tippy from '@tippyjs/react/headless'
import { Placement } from 'tippy.js'
import classNames from 'classnames/bind'

import styles from './MenuTippy.module.scss'
import Item from '~/layouts/components/SideBar/components/Item'
import Spacer from '~/layouts/components/Spacer'

const cx = classNames.bind(styles)

export interface DataMenuTippy {
  icon: Icon
  title: string

  play?: IconFun
  next?: DataMenuTippy[] | React.ReactNode

  props?: {
    to?: string
    href?: string
    onClick?: () => any
  }
  sub?: boolean
  component?: (key: number) => React.ReactNode
  className?: string
  spacer?: boolean
}

function MenuTippy(
  {
    data,
    children,
    placement = 'bottom-end',
    noMG
  }: {
    data: DataMenuTippy[] | React.ReactNode
    children: React.ReactNode
    placement?: Placement
    noMG?: boolean
  },
  ref: any
) {
  function renderer(children: React.ReactNode, next?: DataMenuTippy[] | React.ReactNode) {
    return next ? (
      <MenuTippy data={next} noMG>
        {children}
      </MenuTippy>
    ) : (
      children
    )
  }

  return (
    <Tippy
      ref={ref}
      appendTo={() => document.body}
      interactive
      trigger="click"
      placement={placement}
      render={(attrs) => (
        <div className={cx('menu-tippy')} tabIndex={-1} {...attrs}>
          {data && Array.isArray(data)
            ? data.map(
                (item, i) =>
                  (item.component && item.component(i)) ||
                  (item.spacer ? (
                    <Spacer key={i} fullWidth />
                  ) : (
                    renderer(
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
                      />,
                      item.next
                    )
                  ))
              )
            : data}
        </div>
      )}
    >
      <div className={cx('tippy', { noMG })}>{children}</div>
    </Tippy>
  )
}

export default forwardRef(MenuTippy)
