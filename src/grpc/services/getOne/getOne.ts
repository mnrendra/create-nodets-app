import { ServerUnaryCall, sendUnaryData } from '@grpc/grpc-js'

const getOne = (
  call: ServerUnaryCall<any, any>,
  callback: sendUnaryData<any>
): void => {
  const { params } = call.request
  //
  // Do something here
  //
  callback(null, {
    status: 200,
    message: 'found',
    example: {
      id: params.id,
      name: 'Alfa',
      createdAt: '2022-07-16T17:13:57.450+00:00',
      updatedAt: '2022-07-16T17:13:57.450+00:00'
    }
  })
}

export default getOne
