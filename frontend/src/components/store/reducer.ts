import { randomMusic, saveSetting } from '~/tools'
import {
  MODE_REPEAT,
  NEXT_MUSIC,
  PAUSE_MUSIC,
  PLAY_MUSIC,
  PREV_MUSIC,
  SET_LOADING,
  SET_MUSIC,
  SET_PLAYLIST_INFO,
  TOGGLE_MUSIC,
  TOGGLE_SHUFFLE
} from './constants'

export type init = {
  info: any
  items: any[]
  index: number
  play?: boolean
  modeRepeat: number
  shuffle?: boolean
  rememberShuffle: number[]
  loading?: boolean
  playing?: boolean
}

export type action = {
  type: string
  payload?: any
}

const initState: init = saveSetting.get() || {
  info: {},
  items: [],
  index: 0,
  modeRepeat: 0,
  rememberShuffle: []
}

function reducer(state: init, action: action): init {
  switch (action.type) {
    case SET_PLAYLIST_INFO:
      return { ...state, info: action.payload }
    case SET_MUSIC:
      return { ...state, items: [...state.items, action.payload], index: state.items.length, play: true }
    case PLAY_MUSIC:
      return { ...state, play: true }
    case PAUSE_MUSIC:
      return { ...state, play: false }
    case TOGGLE_MUSIC:
      return { ...state, play: !state.play }
    case NEXT_MUSIC:
      if (state.shuffle) {
        let random = randomMusic(state.items.length, state.rememberShuffle)

        if (random !== -1) {
          return { ...state, index: random, play: true, rememberShuffle: [...state.rememberShuffle, random] }
        } else {
          random = randomMusic(state.items.length, [state.index])
          return { ...state, index: random, play: true, rememberShuffle: [state.index, random] }
        }
      }

      return {
        ...state,
        index: state.index >= state.items.length - 1 ? 0 : state.index + 1,
        play: state.index < state.items.length - 1
      }
    case PREV_MUSIC:
      return { ...state, index: state.index <= 0 ? state.items.length - 1 : state.index - 1, play: true }
    case MODE_REPEAT:
      return { ...state, modeRepeat: state.modeRepeat >= 2 ? 0 : state.modeRepeat + 1 }
    case TOGGLE_SHUFFLE:
      return { ...state, shuffle: !state.shuffle, rememberShuffle: state.shuffle ? [] : [state.index] }
    case SET_LOADING:
      return { ...state, loading: action.payload }
    default:
      throw new Error('Initial action type not supported')
  }
}

export { initState }
export default reducer
