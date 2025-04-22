import express from "express";
const router = express.Router()

import passport from 'passport';
// import session from '../auth/session';
// import '../auth/auth'

router.get('/', (req, res) => {
  res.send("Hello World")
})

router.get("/no", (req, res) => {
  res.send("Hell No World")
})

router.post('/login', async (req, res, next) => {
  await passport.authenticate('local', (err: object, user: object) => {
    if (!user) {
      res.redirect('/api/auth/no')
    }

    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      return res.redirect('/api/auth')

    });
  })(req, res, next);
}
)



export default router