import 'dotenv/config'
const PORT = process.env.PORT

import passport from 'passport';
import express from 'express'
import session from './auth/session.js';
import './auth/auth.js'


import { db } from './database/db.js';

const client = await db.connect()
client.release()

const app: express.Express = express();

app.use(express.json())
app.use(session)
app.use(passport.initialize())
app.use(passport.session())

export let sessionInfo: any;
export let passportInfo: object | undefined

app.use((req, res, next) => {
  sessionInfo = req.session
  passportInfo = req.user
  next()
})

app.get("/ping", (req, res) => {
  res.send("pinged")
})

app.get('/', (req, res) => {
  res.send("Hello World")
})

app.get("/no", (req, res) => {
  res.send("Hell No World")
})

app.post('/login', async  (req, res, next) => {
  await passport.authenticate('local', (err: object, user: object) => {
    if (!user) {
      res.redirect('/no')
    }

    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      return res.redirect('/')

    });
  })(req, res, next);
}
)

app.listen(PORT, () => {
  console.log(`Auth Microservice listening on port ${PORT}`)
})