import { ServerUnaryCall, sendUnaryData } from '@grpc/grpc-js'
import postOne, { iPostOneRes } from '@business/postOne'

const postOneProdcedure = async (
  call: ServerUnaryCall<any, any>,
  callback: sendUnaryData<any>
): Promise<void> => {
  try {
    /* @business logic */
    const response: iPostOneRes = await postOne(call.request)

    callback(null, response)
  } catch (e: any) {
    throw new Error(e)
  }
}

export default postOneProdcedure
