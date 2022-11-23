import { useEffect, useReducer } from 'react'
import classNames from 'classnames/bind'
import styles from './Toast.module.scss'
import reducer, { toastData, ToastData, actions } from './reducer'
import { CREATE_TOAST } from './types'
import { ClearIcon } from '~/components/Icons'

const cx = classNames.bind(styles)

function Toast() {
  const [toasts, dispatch] = useReducer(reducer, toastData)

  useEffect(() => {
    function createToast(e: CustomEventInit<ToastData>) {
      e.detail && dispatch(actions.create(e.detail))
    }

    window.addEventListener(CREATE_TOAST, createToast)

    return () => {
      window.removeEventListener(CREATE_TOAST, createToast)
    }
  }, [])

  useEffect(() => {
    const interval =
      toasts.length > 0
        ? setInterval(() => {
            dispatch(actions.deleteOldTime())
          }, 1000)
        : undefined

    return () => clearInterval(interval)
  }, [toasts])

  function clearToast(time: number) {
    dispatch(actions.deleteByTime(time))
  }

  return (
    <div className={cx('wrapper')}>
      {toasts.map((toast, i) => (
        <div
          key={toast.time || i}
          className={cx('item', {
            [toast.type]: toast.type
          })}
        >
          <span>{toast.msg}</span>
          <span className={cx('icon')} onClick={() => clearToast(toast.time)}>
            <ClearIcon size={20} />
          </span>
        </div>
      ))}
    </div>
  )
}

export default Toast
