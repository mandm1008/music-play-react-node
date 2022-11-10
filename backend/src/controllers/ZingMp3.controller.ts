import { Request, Response } from 'express'
import { ZingMp3 } from 'zingmp3-api-full/dist'

class Controller {
  async getHome(req: Request, res: Response) {
    try {
      const data = await ZingMp3.getHome()

      res.status(200).json({ data })
    } catch (e) {
      res.status(500).json({ error: 'Error in server!' })
    }
  }
}

export default new Controller()
