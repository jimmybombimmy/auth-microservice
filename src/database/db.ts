import 'dotenv/config'

import {Pool} from 'pg'

const pool = new Pool({
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  port: 5433,
  host: process.env.HOST
})

const client = await pool.connect()

client.release()