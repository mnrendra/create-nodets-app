import { ServerUnaryCall, sendUnaryData } from '@grpc/grpc-js'

const putOne = (
  call: ServerUnaryCall<any, any>,
  callback: sendUnaryData<any>
): void => {
  const { params, body } = call.request
  //
  // Do something here
  //
  callback(null, {
    status: 200,
    message: 'OK',
    data: {
      _id: params.id,
      name: body.name,
      created: '2022-07-16T17:13:57.450+00:00',
      updated: '2022-07-16T17:13:57.450+00:00'
    }
  })
}

export default putOne
