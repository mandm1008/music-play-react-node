import { getDetailPlaylist } from '~/servers'
import {
  ADD_MUSIC,
  ADD_TOP_MUSIC,
  ERROR,
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

/**
 *
 * @for playlist.action
 */
export const setPlaylists = async (idPlaylist: string) => {
  const data = await getDetailPlaylist(idPlaylist)

  if (data.data.msg !== 'Success')
    return {
      type: ERROR,
      payload: 'Error fetch data playlist!'
    }

  return {
    type: SET_PLAYLIST_INFO,
    payload: data.data.data
  }
}

/**
 * @for music.action
 */
export const setMusic = (payload: any) => ({
  type: SET_MUSIC,
  payload
})
export const addMusic = (payload: any) => ({
  type: ADD_MUSIC,
  payload
})
export const addTopMusic = (payload: any) => ({
  type: ADD_TOP_MUSIC,
  payload
})

/**
 * @for control.action
 */
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
