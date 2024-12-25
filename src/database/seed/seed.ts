import format from 'pg-format'
import { db } from "../db.js"
import { UserDataInterface } from '../../types.js'
import { users } from '../data/test-data/users.js'

const seed = (userData: UserDataInterface[]) => {
  return db
    .query(`DROP TABLE IF EXISTS users`)
    .then(async () => {
      return await db.query(`CREATE TABLE users (
        id VARCHAR PRIMARY KEY,
        username VARCHAR NOT NULL,
        email VARCHAR NOT NULL,
        hash VARCHAR NOT NULL,
        salt VARCHAR NOT NULL,
        admin BOOLEAN,
        __v INT DEFAULT 0 
      )`)
    })
    .then(() => {
      const usersDataToArr =  users.map(u => {
        const values = []
        for (let key in u) {
          const val = u[key as keyof UserDataInterface];
          values.push(val)
        }
        return values
      })
      
      const usersInsert = format(
        `INSERT INTO users (id, username, email, hash, salt, admin, __v) VALUES %L RETURNING *`,
        usersDataToArr
      )

      return db.query(usersInsert)
    })
}

export default seed

