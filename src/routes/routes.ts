import express from "express";
const router = express.Router()

import authRoutes from './auth/routes'
import healthRoutes from './health/routes'

router.use('/auth', authRoutes)
router.use('/health', healthRoutes)

export default router