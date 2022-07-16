import { Request, Response, NextFunction } from 'express'
import { validateExample } from '@schemas'
import { Example } from '@models'
import { sendSuccess, sendFailed, sendError } from '@commons/responder'
import { isJSON } from '@lib/validator'

interface iExample {
  name: string
}

const post = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { body } = req

    const example: iExample = await validateExample(body)
    const isExist = await Example.findOne({ name: example.name })
    if (isJSON(isExist)) {
      sendFailed(res, { message: `${example.name} already added!` })
    } else {
      const newExample = new Example(example)
      const savedExample: any = await newExample.save()
      sendSuccess(res, {
        message: 'Successfully add a new example!',
        payload: {
          id: savedExample._id,
          name: savedExample.name,
          created: savedExample.created,
          updated: savedExample.updated
        }
      })
    }
  } catch (e) {
    sendError(res, e)
  }
}

export default post
