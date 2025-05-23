import 'dotenv/config'
import session from 'express-session'

export default session({
  secret: process.env.SESSION_SECRET!,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 
  } 
})