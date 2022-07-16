import express from 'express'

import { env } from '@config'
import db from '@db'
import routes from '@routes'

const main = async (): Promise<any> => {
  // conf
  const { PORT, DB_URL } = env()

  // db
  const dbMsg = await db(DB_URL, {})
  console.log('dbMsg', dbMsg)

  // app
  const app = express()
  app.use(express.json())
  app.use(routes)
  app.listen(PORT, () => console.log(`listen on port ${PORT}`))
}

export default main
