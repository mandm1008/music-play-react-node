import Toast from './Toast'
import { CREATE_TOAST } from './types'
import { ToastData } from './reducer'

export function create(type: string, msg: string, { id, time = 4000 }: { id?: string; time?: number } = {}) {
  const evt = new CustomEvent<ToastData>(CREATE_TOAST, { detail: { type, msg, id, time: new Date().getTime() + time } })

  window.dispatchEvent(evt)
}

export default Toast
