import { forwardRef } from 'react'
import classNames from 'classnames/bind'
import { TooltipTippy } from '~/components/CustomTippy'
import styles from './Button.module.scss'
import ButtonItem from '~/components/Button'

const cx = classNames.bind(styles)

const Button = (
  { icon, content, placement, size, primary, hoverPrimary, className, noMG, ...props }: any,
  ref: any
) => {
  return content ? (
    <TooltipTippy content={content} placement={placement} noMG>
      <ButtonItem
        ref={ref}
        hoverPrimary={hoverPrimary}
        primary={primary}
        size={size}
        className={cx('icon', className, { hoverPrimary: hoverPrimary })}
        icon={icon}
        {...props}
      />
    </TooltipTippy>
  ) : (
    <ButtonItem
      ref={ref}
      hoverPrimary={hoverPrimary}
      primary={primary}
      size={size}
      className={cx('icon', className, { hoverPrimary: hoverPrimary })}
      icon={icon}
      {...props}
    />
  )
}

export default forwardRef(Button)
