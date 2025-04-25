import { getDetailPlaylist, getListArtistSong } from '~/servers'
import {
  ADD_MUSIC,
  ADD_PLAYLIST,
  ADD_TOP_MUSIC,
  ERROR,
  MODE_REPEAT,
  NEXT_MUSIC,
  PAUSE_MUSIC,
  PLAY_MUSIC,
  PREV_MUSIC,
  SET_AUTOPLAY,
  SET_LOADING,
  SET_MUSIC,
  SET_PLAYLIST_INFO,
  SUGGEST_MUSIC,
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
export const addPlaylists = async (idPlaylist: string) => {
  const data = (await setPlaylists(idPlaylist)).payload
  return {
    type: ADD_PLAYLIST,
    payload: data.song.items
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
export const getSuggestMusic = async (music: any) => {
  if (music.items.length > 0) {
    let ids = music.items[music.index].artists.map((artist: any) => artist.id)

    const data = await Promise.all(
      ids.map((id: string) =>
        getListArtistSong(id, 1, 10)
          .then((res) => res.data.data)
          .then((data: any) => data.items)
      )
    ).then((value: any[]) => {
      value = value.reduce((prev, curr) => [...prev, ...curr], [])

      value = value.reduce((prev, curr) => {
        if (
          music.items.findIndex((item: any) => item.encodeId === curr.encodeId) === -1 &&
          prev.findIndex((item: any) => item.encodeId === curr.encodeId) === -1
        ) {
          return [...prev, curr]
        }

        return prev
      }, [])

      return value
    })

    return {
      type: SUGGEST_MUSIC,
      payload: data
    }
  }

  return {
    type: ERROR
  }
}

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
export const setAutoPlay = (payload: boolean) => ({
  type: SET_AUTOPLAY,
  payload
})
