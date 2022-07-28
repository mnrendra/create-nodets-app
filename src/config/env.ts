import 'dotenv/config'
import fs from 'fs'

import { isNumb, isString } from '@commons/lib/validator'

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
  GRPC_PORT: number
  PORT: number
  DB_URL: string
}

const defEnv: iEnv = {
  GRPC_PORT: 0,
  PORT: 0,
  DB_URL: ''
}

const env = (): iEnv => {
  // int
  const env: iEnv = getEnv()
  const validEnv: iEnv = defEnv

  // GRPC_PORT
  if (!isNumb(Number(env.GRPC_PORT))) throw new Error(`Need a GRPC_PORT on .env file! ${errMsg}`)
  validEnv.GRPC_PORT = Number(env.GRPC_PORT)

  // PORT
  if (!isNumb(Number(env.PORT))) throw new Error(`Need a PORT on .env file! ${errMsg}`)
  validEnv.PORT = Number(env.PORT)

  // DB_URL
  if (!isString(env.DB_URL) || env.DB_URL === '') throw new Error(`Need a DB_URL on .env file! ${errMsg}`)
  validEnv.DB_URL = `${env.DB_URL}`

  // return validEnv
  return validEnv
}

export default env
