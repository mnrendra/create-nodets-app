import { Request } from 'express'
import { Example } from '@models'
import { validateExample } from '@schemas'
import { isString, isJSON } from '@lib/validator'
import { iExample } from '@interfaces'

interface iPutOneRes {
  status: number
  message: string
  data: iExample | any
}

const defPutOneRes: iPutOneRes = {
  status: 0,
  message: '',
  data: {}
}

interface iValidExample {
  name: string
}

const putOne = async (req?: Request): Promise<iPutOneRes> => {
  try {
    const params = req !== undefined && isJSON(req) && isJSON(req.params) ? req.params : {}
    const body = req !== undefined && isJSON(req) && isJSON(req.body) ? req.body : {}

    let response: iPutOneRes = defPutOneRes

    if (isString(params.id)) {
      const example: iExample | null = await Example.findOne({ _id: params.id })
      if (example !== null && isJSON(example) && isString(`${example._id}`)) {
        const validExample: iValidExample = await validateExample(body)
        example.name = validExample.name
        const newExample = new Example(example)
        const updatedExample = await newExample.save()
        response = {
          status: 200,
          message: 'Updated successfully!',
          data: updatedExample
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

export { iPutOneRes, defPutOneRes }
export default putOne
