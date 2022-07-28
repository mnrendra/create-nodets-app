import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import { protoOption } from './protos'

const protoPath = './src/grpc/protos/services.proto'

const packageDefinition = protoLoader.loadSync(protoPath, protoOption)
const { Example }: any = grpc.loadPackageDefinition(packageDefinition).services

const main = (port: number = 50051): void => {
  const client = new Example(`localhost:${port}`, grpc.credentials.createInsecure())

  client.getMany({ query: {} }, (err: any, response: any): void => {
    if (err !== null && err !== undefined) throw new Error(err)
    console.log('getMany', response)
  })

  client.getOne({ params: { id: '62e2e05b3ea37c861d51815b' } }, (err: any, response: any): void => {
    if (err !== null && err !== undefined) throw new Error(err)
    console.log('getOne', response)
  })

  client.postOne({ body: { name: 'Echo' } }, (err: any, response: any): void => {
    if (err !== null && err !== undefined) throw new Error(err)
    console.log('postOne', response)
  })

  client.putOne({ params: { id: '62e2e05b3ea37c861d51815b' }, body: { name: 'Delta One' } }, (err: any, response: any): void => {
    if (err !== null && err !== undefined) throw new Error(err)
    console.log('putOne', response)
  })

  client.delOne({ params: { id: '62e2e05b3ea37c861d51815b' } }, (err: any, response: any): void => {
    if (err !== null && err !== undefined) throw new Error(err)
    console.log('delOne', response)
  })
}

main()
// export default main
