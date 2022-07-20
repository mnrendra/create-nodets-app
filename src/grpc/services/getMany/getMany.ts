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
    message: 'OK',
    page: 0,
    limit: 1,
    row: [{
      _id: query.id,
      name: 'Alfa',
      created: '2022-07-16T17:13:57.450+00:00',
      updated: '2022-07-16T17:13:57.450+00:00'
    }]
  })
}

export default getMany
