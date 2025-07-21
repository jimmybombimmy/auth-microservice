import 'dotenv/config'

import pg from "pg"
const { Pool } = pg

export const db = new Pool({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  port: parseInt(process.env.POSTGRES_PORT || "5432"),
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE
})