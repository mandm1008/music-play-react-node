import { SET_PLAYLIST_INFO } from './constants'

export type init = {
  playlistInfo: any
  playlistItems: any[]
  musics: any[]
}

export type action = {
  type: string
  payload: any
}

const initState: init = {
  playlistInfo: {},
  playlistItems: [],
  musics: []
}

function reducer(state: init, action: action) {
  switch (action.type) {
    case SET_PLAYLIST_INFO:
      return { ...state, playlistInfo: action.payload }
    default:
      throw new Error('Initial action type not supported')
  }
}

export { initState }
export default reducer
