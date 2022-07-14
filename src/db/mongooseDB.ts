import mongoose from 'mongoose'

const mongooseDB = async (dbURL: string, dbOpt: any) => {
  try {
    const { connection }: any = await mongoose.connect(dbURL, dbOpt)
    const { user, host, port, name } = connection
    const dbHost = user ? `${user}@${host}` : host
    const message = `db connected on ${dbHost}:${port}/${name}`
    return message
  } catch (e) {
    throw e
  }
}

export default mongooseDB
