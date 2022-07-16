import 'dotenv/config'

import { isNumb, isString } from '@lib/validator'

export interface iEnv {
  PORT: number
  DB_URL: string
}

const env = (): iEnv => {
  const { env } = process

  if (env.PORT === undefined || !isNumb(Number(env.PORT))) throw new Error('Need a PORT on .env file!')
  if (env.DB_URL === undefined || !isString(env.DB_URL) || env.DB_URL === '') throw new Error('Need a DB_URL on .env file!')

  return {
    PORT: Number(env.PORT),
    DB_URL: `${env.DB_URL}`
  }
}

export default env
