import { RequestHandler, Request, Response, NextFunction } from 'express'
import getOne, { iGetOneRes } from '@business/getOne'

const getOneRoute: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    /* @business logic */
    const response: iGetOneRes = await getOne(req)

    res.json(response)
  } catch (e: any) {
    next(e)
  }
}

export default getOneRoute
