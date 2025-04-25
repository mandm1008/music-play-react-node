import type { Request, Response } from 'express'

class UserController {
  /**
   * [GET] /user/info
   * @param Query { idUser: string }
   * @param res `user info`
   */
  async info(req: Request, res: Response) {
    res.json({ message: 'User info' })
  }
}

export default new UserController()
