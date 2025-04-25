const logo = await import('./svgs/logo.svg').then((value) => value.default)
const music = await import('./svgs/music.svg').then((value) => value.default)
const playlist = await import('./svgs/playlist.svg').then((value) => value.default)
const history = await import('./svgs/history.svg').then((value) => value.default)
const live = await import('./svgs/live.svg').then((value) => value.default)
const theme = await import('./svgs/theme.svg').then((value) => value.default)
const album = await import('./svgs/album.svg').then((value) => value.default)
const uploadMusic = await import('./svgs/uploadMusic.svg').then((value) => value.default)
const loading = await import('./svgs/loading.svg').then((value) => value.default)
const playing = await import('./gifs/icon-playing.gif').then((value) => value.default)
const premium = await import('./svgs/premium.svg').then((value) => value.default)

const images = {
  logo,
  music,
  playlist,
  history,
  live,
  theme,
  album,
  uploadMusic,
  loading,
  playing,
  premium
}

export default images
