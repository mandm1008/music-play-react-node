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
  TOGGLE_SHUFFLE,
  ADD_MUSIC,
  ADD_TOP_MUSIC,
  ERROR,
  ADD_PLAYLIST,
  SUGGEST_MUSIC,
  SET_AUTOPLAY
} from './constants'

export type init = {
  // Playlist
  idPlaylist?: string
  onPlaylist?: boolean
  playlistInfo?: any

  // Music
  items: any[]
  index: number
  suggest: any[]

  // Control
  play?: boolean
  autoPlay: boolean
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
  idPlaylist: undefined,

  items: [],
  index: 0,
  suggest: [],

  modeRepeat: 0,
  rememberShuffle: [],
  autoPlay: true
}

function reducer(state: init, action: action): init {
  switch (action.type) {
    // Playlist Case
    case SET_PLAYLIST_INFO:
      const { song, ...info } = action.payload
      if (info.encodeId === state.idPlaylist) return state

      return {
        ...state,
        idPlaylist: info.encodeId,
        playlistInfo: info,
        items: song.items,
        index: 0,
        play: true,
        rememberShuffle: []
      }
    case ADD_PLAYLIST:
      return { ...state, items: [...state.items, ...action.payload] }

    // Music Case
    case SET_MUSIC:
      state = { ...state, loading: true }
      const index = state.items.findIndex((music) => music.encodeId === action.payload.encodeId)
      if (index === -1)
        return {
          ...state,
          items: [...state.items, action.payload],
          index: state.items.length,
          play: true
        }
      return { ...state, index, play: true }
    case ADD_MUSIC:
      return { ...state, items: [...state.items, action.payload] }
    case ADD_TOP_MUSIC:
      const left = state.items.slice(0, state.index + 1)
      const right = state.items.slice(state.index + 1)
      return { ...state, items: [...left, action.payload, ...right], shuffle: false, rememberShuffle: [] }
    case SUGGEST_MUSIC:
      return { ...state, suggest: action.payload }

    // Control Case
    case PLAY_MUSIC:
      return { ...state, play: true }
    case PAUSE_MUSIC:
      return { ...state, play: false }
    case TOGGLE_MUSIC:
      return { ...state, play: !state.play }
    case NEXT_MUSIC:
      state = { ...state, loading: true, play: true }
      if (state.shuffle) {
        let random = randomMusic(state.items.length, state.rememberShuffle)

        if (random !== -1) {
          return { ...state, index: random, rememberShuffle: [...state.rememberShuffle, random] }
        } else {
          random = randomMusic(state.items.length, [state.index])
          return { ...state, index: random, rememberShuffle: [state.index, random] }
        }
      }
      if (state.modeRepeat === 0 && state.index + 1 >= state.items.length) {
        if (state.autoPlay && state.suggest.length > 0)
          return {
            ...state,
            items: [...state.items, state.suggest[0]],
            index: state.index + 1,
            suggest: state.suggest.slice(1)
          }
        return { ...state, play: false }
      }

      return {
        ...state,
        index: state.index >= state.items.length - 1 ? 0 : state.index + 1,
        play: state.index < state.items.length - 1
      }
    case PREV_MUSIC:
      return { ...state, index: state.index <= 0 ? state.items.length - 1 : state.index - 1, play: true, loading: true }
    case MODE_REPEAT:
      return { ...state, modeRepeat: state.modeRepeat >= 2 ? 0 : state.modeRepeat + 1 }
    case TOGGLE_SHUFFLE:
      return { ...state, shuffle: !state.shuffle, rememberShuffle: state.shuffle ? [] : [state.index] }
    case SET_LOADING:
      return { ...state, loading: action.payload }
    case SET_AUTOPLAY:
      return { ...state, autoPlay: action.payload }

    // Error Case
    case ERROR:
      console.error(action.payload)
      return state
    default:
      console.error('Initial action type not supported')
      return state
  }
}

export { initState }
export default reducer
