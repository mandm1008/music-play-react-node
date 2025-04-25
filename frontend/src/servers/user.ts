import axios from 'axios'
import type { init } from '~/components/store/reducer'

export const getUserInfo = (idUser: string) => axios.get<any>(`user-info?idUser=${idUser}`)

export const updateUserSetting = (setting: init) => axios.post<any>('update-user-setting', setting)

export const addPlaylist = (idPlaylist: string) => axios.post<any>(`add-playlist?idPlaylist=${idPlaylist}`)
