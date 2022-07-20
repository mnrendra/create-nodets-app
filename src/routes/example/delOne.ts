import { RequestHandler, Request, Response, NextFunction } from 'express'
import delOne, { iDelOneRes } from '@business/delOne'

const delOneRoute: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    /* @business logic */
    const response: iDelOneRes = await delOne(req)

    res.json(response)
  } catch (e: any) {
    next(e)
  }
}

export default delOneRoute
