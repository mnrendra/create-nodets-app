import { Request, Response, NextFunction } from 'express'
import { Example } from '@models'
import { sendSuccess, sendError } from '@commons/responder'

interface iExample {
  _id: string
  name: string
  created: any
  updated: any
}

const gets = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const examples: iExample[] = await Example.find({})
    sendSuccess(res, {
      message: 'Successfully get all examples!',
      total: examples.length,
      payload: examples
    })
  } catch (e: any) {
    sendError(res, e)
  }
}

export default gets
