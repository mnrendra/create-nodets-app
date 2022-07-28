import { RequestHandler, Request, Response, NextFunction } from 'express'
import getMany, { iGetManyRes } from '@business/getMany'

const getManyRoute: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    /* @business logic */
    const response: iGetManyRes = await getMany(req)

    res.json(response)
  } catch (e: any) {
    next(e)
  }
}

export default getManyRoute
