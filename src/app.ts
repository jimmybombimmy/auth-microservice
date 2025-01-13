import 'dotenv/config'
const PORT = process.env.PORT

import passport from 'passport';
import express from 'express'
import { strategy } from './auth/auth.js';
import { UserDataInterface } from './types.js';

import { db } from './database/db.js';
import format from 'pg-format';

const app: express.Express = express();

app.use(passport.authenticate('session'));

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


// const router = express.Router()

// router.get("/", function(req, res) {
//   res.render("yes")
// })

// router.post('/login', 
//   passport.authenticate('local', { failureRedirect: '/login' }),
//   function(req, res) {
//     res.redirect('/');
//   });