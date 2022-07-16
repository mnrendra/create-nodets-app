import { Request, Response, NextFunction } from 'express'
import { Example } from '@models'
import { sendSuccess, sendFailed, sendError } from '@commons/responder'
import { isJSON } from '@lib/validator'

interface iExample {
  _id: string
  name: string
  created: any
  updated: any
}

const get = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { params } = req
    const example: iExample | null = await Example.findOne({ _id: params.id })
    if (example === null || !isJSON(example)) {
      sendFailed(res, { message: `Get example by ${params.id} is not found` })
    } else {
      sendSuccess(res, {
        message: 'Successfully get a example by Id!',
        payload: {
          id: example._id,
          name: example.name,
          created: example.created,
          updated: example.updated
        }
      })
    }
  } catch (e: any) {
    sendError(res, e)
  }
}

export default get
