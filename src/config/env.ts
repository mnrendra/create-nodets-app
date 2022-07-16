import 'dotenv/config'
import fs from 'fs'

import { isNumb, isString } from '@lib/validator'

const errMsg = 'Please follow https://github.com/mnrendra/create-nodets-app#3-set-environment step.'

const getEnv = (): any => {
  try {
    fs.readFileSync('.env', { encoding: 'utf8', flag: 'r' })
  } catch (e) {
    throw new Error(`Need a .env file! ${errMsg}`)
  }
  return process.env
}

interface iEnv {
  PORT: number
  DB_URL: string
}

const env = (): iEnv => {
  const env: iEnv = getEnv()
  if (!isNumb(Number(env.PORT))) throw new Error(`Need a PORT on .env file! ${errMsg}`)
  if (!isString(env.DB_URL) || env.DB_URL === '') throw new Error(`Need a DB_URL on .env file! ${errMsg}`)

  return {
    PORT: Number(env.PORT),
    DB_URL: `${env.DB_URL}`
  }
}

export default env
