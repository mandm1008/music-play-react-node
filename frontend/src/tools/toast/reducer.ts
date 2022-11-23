import { CREATE_TOAST, DELETE_BY_TIME, DELETE_OLD_TIME } from './types'

export interface ToastData {
  type: string
  msg: string
  id?: string
  time: number
}

type action = {
  type: string
  payload?: any
}

export const toastData: ToastData[] = []

export const actions = {
  create: (payload: ToastData) => ({ type: CREATE_TOAST, payload }),
  deleteOldTime: () => ({ type: DELETE_OLD_TIME }),
  deleteByTime: (payload: number) => ({ type: DELETE_BY_TIME, payload })
}

function reducer(state: ToastData[], action: action): ToastData[] {
  if (action.type === CREATE_TOAST) return [...state, action.payload]

  if (action.type === DELETE_OLD_TIME) return state.filter((item) => item.time > new Date().getTime())

  if (action.type === DELETE_BY_TIME) return state.filter((item) => item.time !== action.payload)

  return state
}

export default reducer
