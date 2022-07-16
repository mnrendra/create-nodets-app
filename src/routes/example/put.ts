import { Request, Response, NextFunction } from 'express'
import { validateExample } from '@schemas'
import { Example } from '@models'
import { sendSuccess, sendFailed, sendError } from '@commons/responder'
import { isJSON } from '@lib/validator'

const put = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { params, body } = req
    const example: any | null = await Example.findOne({ _id: params.id })
    if (example === null || !isJSON(example)) {
      sendFailed(res, { message: `example by ${params.id} is not found` })
    } else {
      const validExample: any = await validateExample(body)
      const newExample: any = { ...example._doc, ...validExample }
      const savedExample: any = await Example.updateOne({ _id: params.id }, newExample)
      sendSuccess(res, {
        message: 'Successfully update a example by Id!',
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

export default put
