import { SET_PLAYLIST_INFO } from "./constants";

export const setPlaylists = (payload: any) => ({
  type: SET_PLAYLIST_INFO,
  payload,
});
