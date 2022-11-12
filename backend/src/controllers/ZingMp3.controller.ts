import { Request, Response } from 'express'
import { ZingMp3 } from 'zingmp3-api-full/dist'

class Controller {
  // [GET] '/'
  async getHome(req: Request, res: Response) {
    try {
      const data = await ZingMp3.getHome()

      res.status(200).json({ data })
    } catch (e) {
      res.status(500).json({ error: 'Error in server!' })
    }
  }

  // [GET] '/artist?name=...'
  async getArtist(req: Request, res: Response) {
    try {
      const data = await ZingMp3.getArtist(req.query.name as string)

      res.status(200).json({ data })
    } catch (e) {
      res.status(500).json({ error: 'Error in server!' })
    }
  }

  // [GET] '/category-mv?id=...'
  async getCategoryMV(req: Request, res: Response) {
    try {
      const data = await ZingMp3.getCategoryMV(req.query.id as string)

      res.status(200).json({ data })
    } catch (e) {
      res.status(500).json({ error: 'Error in server!' })
    }
  }

  // [GET] '/chart-home'
  async getChartHome(req: Request, res: Response) {
    try {
      const data = await ZingMp3.getChartHome()

      res.status(200).json({ data })
    } catch (e) {
      res.status(500).json({ error: 'Error in server!' })
    }
  }

  // [GET] '/detail-playlist?id=...'
  async getDetailPlaylist(req: Request, res: Response) {
    try {
      const data = await ZingMp3.getDetailPlaylist(req.query.id as string)

      res.status(200).json({ data })
    } catch (e) {
      res.status(500).json({ error: 'Error in server!' })
    }
  }

  // [GET] '/info-song?id=...'
  async getInfoSong(req: Request, res: Response) {
    try {
      const data = await ZingMp3.getInfoSong(req.query.id as string)

      res.status(200).json({ data })
    } catch (e) {
      res.status(500).json({ error: 'Error in server!' })
    }
  }

  // [GET] '/list-artist-song?id=...&page=...&count=...'
  async getListArtistSong(req: Request, res: Response) {
    try {
      const data = await ZingMp3.getListArtistSong(
        req.query.id as string,
        req.query.page as string,
        req.query.count as string
      )

      res.status(200).json({ data })
    } catch (e) {
      res.status(500).json({ error: 'Error in server!' })
    }
  }

  // [GET] '/list-mv?id=...&page=...&count=...'
  async getListMV(req: Request, res: Response) {
    try {
      const data = await ZingMp3.getListMV(req.query.id as string, req.query.page as string, req.query.count as string)

      res.status(200).json({ data })
    } catch (e) {
      res.status(500).json({ error: 'Error in server!' })
    }
  }

  // [GET] '/lyric?id=...'
  async getLyric(req: Request, res: Response) {
    try {
      const data = await ZingMp3.getLyric(req.query.id as string)

      res.status(200).json({ data })
    } catch (e) {
      res.status(500).json({ error: 'Error in server!' })
    }
  }

  // [GET] '/new-release-chart'
  async getNewReleaseChart(req: Request, res: Response) {
    try {
      const data = await ZingMp3.getNewReleaseChart()

      res.status(200).json({ data })
    } catch (e) {
      res.status(500).json({ error: 'Error in server!' })
    }
  }

  // [GET] '/song?id=...'
  async getSong(req: Request, res: Response) {
    try {
      const data = await ZingMp3.getSong(req.query.id as string)

      res.status(200).json({ data })
    } catch (e) {
      res.status(500).json({ error: 'Error in server!' })
    }
  }

  // [GET] '/top100'
  async getTop100(req: Request, res: Response) {
    try {
      const data = await ZingMp3.getTop100()

      res.status(200).json({ data })
    } catch (e) {
      res.status(500).json({ error: 'Error in server!' })
    }
  }

  // [GET] '/video?id=...'
  async getVideo(req: Request, res: Response) {
    try {
      const data = await ZingMp3.getVideo(req.query.id as string)

      res.status(200).json({ data })
    } catch (e) {
      res.status(500).json({ error: 'Error in server!' })
    }
  }

  // [GET] '/search?q=...'
  async search(req: Request, res: Response) {
    try {
      const data = await ZingMp3.search(req.query.q as string)

      res.status(200).json({ data })
    } catch (e) {
      res.status(500).json({ error: 'Error in server!' })
    }
  }
}

export default new Controller()
