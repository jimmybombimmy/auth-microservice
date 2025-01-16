import 'dotenv/config'
const PORT = process.env.PORT

import passport from 'passport';
import express from 'express'
import session from './auth/session.js';
import { strategy } from './auth/auth.js';
import './auth/auth.js'


const app: express.Express = express();

app.use(session)
app.use(passport.initialize())
app.use(passport.session())

export let sessionInfo: any;
export let passportInfo: object | undefined

app.use((req, res, next) => {
  sessionInfo = req.session
  console.log("shinfo", sessionInfo)
  passportInfo = req.user
  next()
})

app.get("/ping", (req, res) => {
  res.send("pinged")
})

app.get('/', (req, res) => {
  res.send("Hello World")
})

app.get("/no", (req,res) => {
  res.send("Hell No World")
})

app.post('/login', passport.authenticate('local', {
  successRedirect: "/",
  failureRedirect: "/no"
}))

app.listen(PORT, () => {
  console.log(`Auth Microservice listening on port ${PORT}`)
})