import { Express } from 'express'
import { ZingMp3Controller } from 'src/controllers'

function routing(app: Express) {
  app.get('/search', ZingMp3Controller.search)
  app.get('/video', ZingMp3Controller.getVideo)
  app.get('/top100', ZingMp3Controller.getTop100)
  app.get('/song', ZingMp3Controller.getSong)
  app.get('/new-release-chart', ZingMp3Controller.getNewReleaseChart)
  app.get('/lyric', ZingMp3Controller.getLyric)
  app.get('/list-mv', ZingMp3Controller.getListMV)
  app.get('/list-artist-song', ZingMp3Controller.getListArtistSong)
  app.get('/info-song', ZingMp3Controller.getInfoSong)
  app.get('/detail-playlist', ZingMp3Controller.getDetailPlaylist)
  app.get('/chart-home', ZingMp3Controller.getChartHome)
  app.get('/category-mv', ZingMp3Controller.getCategoryMV)
  app.get('/artist', ZingMp3Controller.getArtist)
  app.get('/', ZingMp3Controller.getHome)
}

export default routing
