import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import { protoOption } from './protos'
import services from './services'

const protoPath = './src/grpc/protos/services.proto'

const packageDefinition = protoLoader.loadSync(protoPath, protoOption)
const { Example }: any = grpc.loadPackageDefinition(packageDefinition).services

const main = (
  port: number,
  callback: (error: any, port: number | null) => void
): void => {
  try {
    const server = new grpc.Server()

    server.addService(Example.service, {
      getMany: services.getMany,
      getOne: services.getOne,
      postOne: services.postOne,
      putOne: services.putOne,
      delOne: services.delOne
    })

    server.bindAsync(`0.0.0.0:${port}`, grpc.ServerCredentials.createInsecure(), () => {
      server.start()
      callback(null, port)
    })
  } catch (e: any) {
    callback(e, null)
  }
}

export default main
