import { Strategy as LocalStrategy, Strategy } from "passport-local";
import crypto from "crypto"
import { UserDataInterface } from "../types.js";

import format from 'pg-format'
import { db } from "../database/db.js"

// to do:
// - Look into double buffering in the psql db
// - understand whether db.query<UserDataInterface>(query) is being used correctly here

export const strategy: Strategy = new LocalStrategy(async function verify(username, password, done) {

  try {
    const query = format('SELECT * FROM users WHERE username = %L', username);
    const result = await db.query<UserDataInterface>(query);

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