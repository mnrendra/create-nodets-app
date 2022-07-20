import { ServerUnaryCall, sendUnaryData } from '@grpc/grpc-js'

const postOne = (
  call: ServerUnaryCall<any, any>,
  callback: sendUnaryData<any>
): void => {
  const { body } = call.request
  //
  // Do something here
  //
  callback(null, {
    status: 201,
    message: 'OK',
    data: {
      _id: '123',
      name: body.name,
      created: '2022-07-16T17:13:57.450+00:00',
      updated: '2022-07-16T17:13:57.450+00:00'
    }
  })
}

export default postOne
