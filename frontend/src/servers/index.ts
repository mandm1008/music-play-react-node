import { axios } from '../config'

export * as userService from './user'

export const getHome = () => axios.get<any>('/')

export const getArtist = (name: string) => axios.get<any>(`artist?name=${name}`)

export const getCategoryMV = (id: string) => axios.get<any>(`category-mv?id=${id}`)

export const getChartHome = () => axios.get<any>('chart-home')

export const getDetailPlaylist = (id: string) => axios.get<any>(`detail-playlist?id=${id}`)

export const getInfoSong = (id: string) => axios.get<any>(`info-song?id=${id}`)

export const getListArtistSong = (id: string, page: number, count: number) =>
  axios.get<any>(`list-artist-song?id=${id}&page=${page}&count=${count}`)

export const getListMV = (id: string, page: number, count: number) =>
  axios.get<any>(`list-mv?id=${id}&page=${page}&count=${count}`)

export const getLyric = (id: string) => axios.get<any>(`lyric?id=${id}`)

export const getNewReleaseChart = () => axios.get<any>('new-release-chart')

export const getSong = (id: string) => axios.get<any>(`song?id=${id}`)

export const getTop100 = () => axios.get<any>('top100')

export const getVideo = (id: string) => axios.get<any>(`video?id=${id}`)

export const search = (q: string) => axios.get<any>(`search?q=${q}`)
