import { Express } from 'express'

import HomeRouter from './home'

function routing(app: Express) {
  app.use('/', HomeRouter)
}

export default routing
