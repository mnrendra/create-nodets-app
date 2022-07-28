import { ServerUnaryCall, sendUnaryData } from '@grpc/grpc-js'
import getOne, { iGetOneRes } from '@business/getOne'

const getOneProcedure = async (
  call: ServerUnaryCall<any, any>,
  callback: sendUnaryData<any>
): Promise<void> => {
  try {
    /* @business logic */
    const response: iGetOneRes = await getOne(call.request)

    callback(null, response)
  } catch (e: any) {
    throw new Error(e)
  }
}

export default getOneProcedure
