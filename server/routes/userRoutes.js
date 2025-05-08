import express from 'express'
import { getUsersHandler } from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.get('/', protect, getUsersHandler)

export default router