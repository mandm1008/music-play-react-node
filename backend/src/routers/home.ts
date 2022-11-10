import { Router } from 'express'
import { ZingMp3Controller } from '../controllers'

const router = Router()

router.get('/', ZingMp3Controller.getHome)

export default router
