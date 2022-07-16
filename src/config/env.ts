import 'dotenv/config'
import fs from 'fs'

import { isNumb, isString } from '@lib/validator'

export interface iEnv {
  PORT: number
  DB_URL: string
}

const env = (): iEnv => {
  const errMsg = 'Please follow https://github.com/mnrendra/create-nodets-app#3-set-environment step.'

  try {
    fs.readFileSync('.env', { encoding: 'utf8', flag: 'r' })
  } catch (e) {
    throw new Error(`Need a .env file! ${errMsg}`)
  }

  const { env } = process

  if (env.PORT === undefined || !isNumb(Number(env.PORT))) throw new Error(`Need a PORT on .env file! ${errMsg}`)
  if (env.DB_URL === undefined || !isString(env.DB_URL) || env.DB_URL === '') throw new Error(`Need a DB_URL on .env file! ${errMsg}`)

  return {
    PORT: Number(env.PORT),
    DB_URL: `${env.DB_URL}`
  }
}

export default env
