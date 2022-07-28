import { ServerUnaryCall, sendUnaryData } from '@grpc/grpc-js'
import putOne, { iPutOneRes } from '@business/putOne'

const putOneProcedure = async (
  call: ServerUnaryCall<any, any>,
  callback: sendUnaryData<any>
): Promise<void> => {
  try {
    /* @business logic */
    const response: iPutOneRes = await putOne(call.request)

    callback(null, response)
  } catch (e: any) {
    throw new Error(e)
  }
}

export default putOneProcedure
