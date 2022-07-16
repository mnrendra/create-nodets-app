import mongoose from 'mongoose'

interface iConnection {
  user: string
  host: string
  port: string
  name: string
}

const mongooseDB = async (dbURL: string, dbOpt: any): Promise<any> => {
  try {
    const { connection }: any = await mongoose.connect(dbURL, dbOpt)
    const { user, host, port, name }: iConnection = connection
    const dbHost = typeof user === 'string' && user !== '' ? `${user}@${host}` : host
    const message = `db connected on ${dbHost}:${port}/${name}`
    return message
  } catch (e: any) {
    throw new Error(e)
  }
}

export default mongooseDB
