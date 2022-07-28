import 'module-alias/register'
import { env } from '@config'
import db from '@db'
import { rest, grpc } from '@interfaces'

const { GRPC_PORT, PORT, DB_URL } = env()

db(DB_URL, {})
  .then((dbMsg) => {
    console.log(dbMsg)
    //
    rest.app.listen(PORT, () => {
      console.log(`app listening on port ${PORT}`)
    })
    //
    grpc.server(GRPC_PORT, (err: any, port: number | null) => {
      if (err !== null) console.log('Error gRPC:', err)
      else console.log(`gRPC server running on port ${Number(port)}`)
    })
    //
  })
  .catch((e) => {
    console.error('Error: MongoDB (mongod) server is not running! Please run mongod first!')
  })
