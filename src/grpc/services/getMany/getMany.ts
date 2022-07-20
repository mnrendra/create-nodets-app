import { ServerUnaryCall, sendUnaryData } from '@grpc/grpc-js'

const getMany = (
  call: ServerUnaryCall<any, any>,
  callback: sendUnaryData<any>
): void => {
  const { query } = call.request
  //
  // Do something here
  //
  callback(null, {
    status: 200,
    message: 'found',
    page: 0,
    length: 1,
    examples: [{
      id: query.id,
      name: 'Alfa',
      createdAt: '2022-07-16T17:13:57.450+00:00',
      updatedAt: '2022-07-16T17:13:57.450+00:00'
    }]
  })
}

export default getMany
