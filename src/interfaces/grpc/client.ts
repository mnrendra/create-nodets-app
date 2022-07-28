import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import { protoOption } from './protos'

const protoPath = './src/interfaces/grpc/protos/services.proto'

const packageDefinition = protoLoader.loadSync(protoPath, protoOption)
const { Example }: any = grpc.loadPackageDefinition(packageDefinition).services

const main = (port: number = 50051): void => {
  const client = new Example(`localhost:${port}`, grpc.credentials.createInsecure())

  client.getMany({ query: {} }, (err: any, response: any): void => {
    if (err !== null && err !== undefined) throw new Error(err)
    console.log('getMany', response)
  })

  client.getOne({ params: { id: '62e2e9c9c85d720a10d6aa33' } }, (err: any, response: any): void => {
    if (err !== null && err !== undefined) throw new Error(err)
    console.log('getOne', response)
  })

  client.postOne({ body: { name: 'Foxtrot' } }, (err: any, response: any): void => {
    if (err !== null && err !== undefined) throw new Error(err)
    console.log('postOne', response)
  })

  client.putOne({ params: { id: '62e2e16d70ebc9a93593aec1' }, body: { name: 'Echo One' } }, (err: any, response: any): void => {
    if (err !== null && err !== undefined) throw new Error(err)
    console.log('putOne', response)
  })

  client.delOne({ params: { id: '62e2e9c9c85d720a10d6aa33' } }, (err: any, response: any): void => {
    if (err !== null && err !== undefined) throw new Error(err)
    console.log('delOne', response)
  })
}

main()
// export default main
