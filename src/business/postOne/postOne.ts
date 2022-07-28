import { Request } from 'express'
import { Example } from '@models'
import { validateExample } from '@commons/joi'
import { isString, isJSON } from '@commons/lib/validator'
import { iExample } from '@commons/ts/interfaces'

interface iPostOneRes {
  status: number
  message: string
  data: iExample | any
}

const defPostOneRes: iPostOneRes = {
  status: 0,
  message: '',
  data: {}
}

interface iValidExample {
  name: string
}

const postOne = async (req?: Request): Promise<iPostOneRes> => {
  try {
    const body = req !== undefined && isJSON(req) && isJSON(req.body) ? req.body : {}

    let response: iPostOneRes = defPostOneRes

    if (isString(body.name)) {
      const validExample: iValidExample = await validateExample(body)

      const example: iExample | null = await Example.findOne({ name: validExample.name })
      if (example !== null) {
        response = {
          status: 300,
          message: 'Already created!',
          data: example
        }
      } else {
        const newExample = new Example(validExample)
        const savedExample = await newExample.save()
        response = {
          status: 201,
          message: 'Created successfully!',
          data: savedExample
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

export { iPostOneRes, defPostOneRes }
export default postOne
