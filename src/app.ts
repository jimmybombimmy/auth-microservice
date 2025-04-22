import 'dotenv/config'

import express from 'express'
import routes from './routes/routes.js'
import passport from 'passport';
import session from './auth/session.js';
import './auth/auth.js' 

// import { db } from './database/db';
// const client = await db.connect()
// client.release()


export const app: express.Express = express();

app.use(express.json())
app.use(session)
app.use(passport.initialize())
app.use(passport.session())

export let sessionInfo: object | undefined;
export let passportInfo: object | undefined;

app.use((req, res, next) => {
  sessionInfo = req.session
  passportInfo = req.user
  next()
})

app.use(`/api`, routes)

const PORT = process.env.PORT
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Auth Microservice listening on port ${PORT}`)
  })
}

// app.use(router)
