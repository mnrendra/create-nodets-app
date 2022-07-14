import { validateExample } from '@schemas'
import { Example } from '@models'
import { sendFailed, sendError, sendSuccess } from '@commons/responder'
import { isJSON } from '@lib/validator'

const post = async (req: any, res: any, next: any) => {
  try {
    const { body } = req

    const validExample = await validateExample(body)
    const isExist = await Example.findOne({ name: validExample.name })
    if (isJSON(isExist)) {
      sendFailed(res, {
        message: `${validExample.name} already added!`,
        payload: { name: validExample.name }
      })
    }

    const newExample = new Example(validExample)
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
  } catch (e) {
    sendError(res, e)
    next(e)
  }
}

export default post
