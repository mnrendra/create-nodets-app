import { Request } from 'express'
import { Example } from '@models'
import { isString, isJSON } from '@commons/lib/validator'
import { iExample } from '@commons/ts/interfaces'

interface iDelOneRes {
  status: number
  message: string
  data: iExample | any
}

const defDelOneRes: iDelOneRes = {
  status: 0,
  message: '',
  data: {}
}

const delOne = async (req?: Request): Promise<iDelOneRes> => {
  try {
    const params = req !== undefined && isJSON(req) && isJSON(req.params) ? req.params : {}

    let response: iDelOneRes = defDelOneRes

    if (isString(params.id)) {
      const example: iExample | null = await Example.findOne({ _id: params.id })
      if (example !== null && isJSON(example) && isString(`${example._id}`)) {
        const deletedExample = await Example.deleteOne({ _id: example._id })
        response = {
          status: 200,
          message: 'Deleted successfully!',
          data: deletedExample
        }
      } else {
        response = {
          status: 404,
          message: 'Not found',
          data: {}
        }
      }
    } else {
      response = {
        status: 300,
        message: 'Body.name must be a string',
        data: {}
      }
    }

    return response
  } catch (e: any) {
    throw new Error(e)
  }
}

export { iDelOneRes, defDelOneRes }
export default delOne
