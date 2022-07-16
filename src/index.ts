import 'module-alias/register'
import { env } from '@config'
import db from '@db'
import app from './app'

const { PORT, DB_URL } = env()

db(DB_URL, {})
  .then((dbMsg) => {
    console.log(dbMsg)
    app.listen(PORT, () => {
      console.log(`app listening on port ${PORT}`)
    })
  })
  .catch((e) => {
    console.error('Error: MongoDB (mongod) server is not running! Please run mongod first!')
  })
