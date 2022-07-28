import { ServerUnaryCall, sendUnaryData } from '@grpc/grpc-js'
import getMany, { iGetManyRes } from '@business/getMany'

const getManyProcedure = async (
  call: ServerUnaryCall<any, any>,
  callback: sendUnaryData<any>
): Promise<void> => {
  try {
    /* @business logic */
    const response: iGetManyRes = await getMany(call.request)

    callback(null, response)
  } catch (e: any) {
    throw new Error(e)
  }
}

export default getManyProcedure
