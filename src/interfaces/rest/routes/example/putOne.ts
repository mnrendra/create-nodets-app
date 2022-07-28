import { RequestHandler, Request, Response, NextFunction } from 'express'
import putOne, { iPutOneRes } from '@business/putOne'

const putOneRoute: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    /* @business logic */
    const response: iPutOneRes = await putOne(req)

    res.json(response)
  } catch (e: any) {
    next(e)
  }
}

export default putOneRoute
