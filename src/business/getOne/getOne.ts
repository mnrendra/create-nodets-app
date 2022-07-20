import { Request } from 'express'
import { Example } from '@models'
import { isString, isJSON } from '@lib/validator'
import { iExample } from '@interfaces'

interface iGetOneRes {
  status: number
  message: string
  data: iExample | any
}

const defGetOneRes: iGetOneRes = {
  status: 0,
  message: '',
  data: {}
}

const getOne = async (req?: Request): Promise<iGetOneRes> => {
  try {
    const params = req !== undefined && isJSON(req) && isJSON(req.params) ? req.params : {}

    let response: iGetOneRes = defGetOneRes

    if (isString(params.id)) {
      const example: iExample | null = await Example.findOne({ _id: params.id })
      if (example !== null && isJSON(example) && isString(`${example._id}`)) {
        response = {
          status: 200,
          message: 'OK',
          data: example
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
        message: 'Params.id must be a string',
        data: {}
      }
    }

    return response
  } catch (e: any) {
    throw new Error(e)
  }
}

export { iGetOneRes, defGetOneRes }
export default getOne
