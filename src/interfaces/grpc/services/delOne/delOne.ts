import { ServerUnaryCall, sendUnaryData } from '@grpc/grpc-js'
import delOne, { iDelOneRes } from '@business/delOne'

const delOneProcedure = async (
  call: ServerUnaryCall<any, any>,
  callback: sendUnaryData<any>
): Promise<void> => {
  try {
    /* @business logic */
    const response: iDelOneRes = await delOne(call.request)

    callback(null, response)
  } catch (e: any) {
    throw new Error(e)
  }
}

export default delOneProcedure
