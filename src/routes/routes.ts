import express from "express";
const router = express.Router()

import authRoutes from './auth/routes.js'
import healthRoutes from './health/routes.js'

router.use('/auth', authRoutes)
router.use('/health', healthRoutes)

export default router