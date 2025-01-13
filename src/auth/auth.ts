import { Strategy as LocalStrategy, Strategy } from "passport-local";
import crypto from "crypto"
import { UserDataInterface } from "../types.js";

import format from 'pg-format'
import { db } from "../database/db.js"
import passport from "passport";

export const strategy: Strategy = new LocalStrategy(async function verify(username, password, done) {

  try {
    const query = format('SELECT * FROM users WHERE username = %L', username);
    const result = await db.query<UserDataInterface>(query);
    console.log(result)

    if (result.rows.length === 0) {
      return done(null, false, { message: 'Incorrect username or password.' });
    }

    const user = result.rows[0];
    const userHashBuffer = Buffer.from(user.hash, 'hex');


    crypto.pbkdf2(password, user.salt, 310000, 32, 'sha256', (err, hashedPassword) => {
      if (err) {
        return done(err);
      }

      if (!crypto.timingSafeEqual(userHashBuffer, hashedPassword)) {
        return done(null, false, { message: 'Incorrect username or password.' });
      }

      return done(null, user);

    })
  } catch (err) {
    return done(err);
  }

})

passport.use(strategy)

passport.serializeUser((user: any, done) => {
  return done(null, user.id)
})

passport.deserializeUser(async (userId, done) => {
  
  await db.query(format(`SELECT * FROM users WHERE username = %L;`, "goku123")) 
  .then(({rows}) => {
    if (rows[0]) {
      done(null, rows[0])
    } else {
      done(new Error("No user -- change this error in deserialise user"))
    }

  })
  

  // User.findById(userId)
  //   .then((user) => {
  //     done(null, user)
  //   })
  //   .catch((err) => {
  //     done(err)
  //   })
})
