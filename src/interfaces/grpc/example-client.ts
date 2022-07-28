import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import { protoOption } from './protos'

const protoPath = './src/interfaces/grpc/protos/services.proto'

const packageDefinition = protoLoader.loadSync(protoPath, protoOption)
const { Example }: any = grpc.loadPackageDefinition(packageDefinition).services

const EXAMPLE_GET_QUERY = {} // replace me!
const EXAMPLE_GET_PARAMS = { id: 'example-get-param-id' } // replace me!

const EXAMPLE_POST_BODY = { name: 'Example Post Name' } // replace me!

const EXAMPLE_PUT_PARAMS = { id: 'example-put-params-id' } // replace me!
const EXAMPLE_PUT_BODY = { name: 'Example Put Name' } // replace me!

const EXAMPLE_DELETE_PARAMS = { id: 'example-delete-params-id' } // replace me!

const main = (port: number = 50051): void => {
  const client = new Example(`localhost:${port}`, grpc.credentials.createInsecure())

  client.getMany({ query: EXAMPLE_GET_QUERY }, (err: any, response: any): void => {
    if (err !== null && err !== undefined) throw new Error(err)
    console.log('getMany', response)
  })

  client.getOne({ params: EXAMPLE_GET_PARAMS }, (err: any, response: any): void => {
    if (err !== null && err !== undefined) throw new Error(err)
    console.log('getOne', response)
  })

  client.postOne({ body: EXAMPLE_POST_BODY }, (err: any, response: any): void => {
    if (err !== null && err !== undefined) throw new Error(err)
    console.log('postOne', response)
  })

  client.putOne({ params: EXAMPLE_PUT_PARAMS, body: EXAMPLE_PUT_BODY }, (err: any, response: any): void => {
    if (err !== null && err !== undefined) throw new Error(err)
    console.log('putOne', response)
  })

  client.delOne({ params: EXAMPLE_DELETE_PARAMS }, (err: any, response: any): void => {
    if (err !== null && err !== undefined) throw new Error(err)
    console.log('delOne', response)
  })
}

main()
// export default main
