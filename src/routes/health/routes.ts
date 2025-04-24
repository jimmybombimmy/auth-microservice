import express from "express";
const router = express.Router()

router.get("/heartbeat", (req, res) => {
  res.status(200).send({message: "In Service"})
})

export default router