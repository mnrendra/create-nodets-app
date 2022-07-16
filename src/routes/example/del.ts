import { Request, Response, NextFunction } from 'express'
import { Example } from '@models'
import { sendSuccess, sendFailed, sendError } from '@commons/responder'
import { isJSON } from '@lib/validator'

const del = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { params } = req
    const example: any | null = await Example.findOne({ _id: params.id })
    if (example === null || !isJSON(example)) {
      sendFailed(res, { message: `example by ${params.id} is not found` })
    } else {
      const savedExample: any = await Example.deleteOne({ _id: params.id })
      sendSuccess(res, {
        message: 'Successfully delete a example by Id!',
        payload: {
          id: savedExample._id,
          name: savedExample.name,
          created: savedExample.created,
          updated: savedExample.updated
        }
      })
    }
  } catch (e: any) {
    sendError(res, e)
  }
}

export default del
