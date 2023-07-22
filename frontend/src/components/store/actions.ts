import {
  ADD_MUSIC,
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

export const setPlaylists = (payload: any) => ({
  type: SET_PLAYLIST_INFO,
  payload
})

export const setMusic = (payload: any) => ({
  type: SET_MUSIC,
  payload
})

export const addMusic = (payload: any) => ({
  type: ADD_MUSIC,
  payload
})

export const playMusic = () => ({
  type: PLAY_MUSIC
})

export const pauseMusic = () => ({
  type: PAUSE_MUSIC
})

export const toggleMusic = () => ({
  type: TOGGLE_MUSIC
})

export const nextMusic = () => ({
  type: NEXT_MUSIC
})

export const prevMusic = () => ({
  type: PREV_MUSIC
})

export const modeRepeat = () => ({
  type: MODE_REPEAT
})

export const toggleShuffle = () => ({
  type: TOGGLE_SHUFFLE
})

export const setLoading = (payload: boolean) => ({
  type: SET_LOADING,
  payload
})
