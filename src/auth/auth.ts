import { Strategy as LocalStrategy } from "passport-local";
import crypto from "crypto"

import { db } from "../database/db.js"
import format from 'pg-format'
import passport from "passport";

const customFields = {
  usernameField: 'username',
  passwordField: 'password',
}

const verifyCallback = async (username: string, password: string, done: Function) => {
  try {
    const result = await db.query("SELECT * FROM users WHERE username = $1", [username.toLowerCase()])
    if (result.rows.length === 0) {
      return done(null, false);
    }

    const user = result.rows[0];
    const userHashBuffer = Buffer.from(user.hash, 'hex');


    crypto.pbkdf2(password, user.salt, 310000, 32, 'sha256', (err, hashedPassword) => {
      if (err) {
        return done(err);
      }

      if (!crypto.timingSafeEqual(userHashBuffer, hashedPassword)) {
        return done(null, false);
      }

      return done(null, user);

    })
  } catch (err) {
    return done(err);
  }
}

const strategy = new LocalStrategy(customFields, verifyCallback)

passport.use(strategy)

passport.serializeUser((user: any, done) => {
  return done(null, user.id)
})

passport.deserializeUser(async (userId, done) => {
  await db.query(format(`SELECT * FROM users WHERE username = %L`, "goku123")) 
  .then(({rows}) => {
    if (rows[0]) {
      done(null, rows[0])
    } else {
      done(new Error("No user -- change this error in deserialise user"))
    }
  })
})
