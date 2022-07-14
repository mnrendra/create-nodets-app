import 'dotenv/config'
import fs from 'fs'

import { isNumb, isString } from '@lib/validator'

const env = (): any => {
  try {
    fs.readFileSync('.env', { encoding: 'utf8', flag: 'r' })
  } catch (e) {
    throw e
  }

  const { env } = process

  if (!isNumb(Number(env.PORT))) throw new Error('Need a PORT env on .env file!')
  if (!isString(env.DB_URL) || env.DB_URL === '') throw new Error('Need a MongoDB URL env on .env file!')

  return {
    PORT: Number(env.PORT),
    DB_URL: `${env.DB_URL}`
  }
}

export default env
