import { Request } from 'express'
import { Example } from '@models'
import { isString, isJSON } from '@lib/validator'
import { iExample } from '@interfaces'

interface iGetManyRes {
  status: number
  message: string
  page: number
  limit: number
  row: iExample[]
}

const defGetManyRes: iGetManyRes = {
  status: 0,
  message: '',
  page: 0,
  limit: 0,
  row: []
}

const getMany = async (req?: Request): Promise<iGetManyRes> => {
  try {
    const query = req !== undefined && isJSON(req) && isJSON(req.query) ? req.query : {}

    let examples: iExample[] = []
    let response: iGetManyRes = defGetManyRes

    if (isString(query.id) && query.id !== '') {
      examples = await Example.find({ _id: query.id })
    } else {
      examples = await Example.find({})
    }

    response = {
      status: 200,
      message: 'OK',
      page: 0,
      limit: examples.length,
      row: examples
    }

    return response
  } catch (e: any) {
    throw new Error(e)
  }
}

export { iGetManyRes, defGetManyRes }
export default getMany
