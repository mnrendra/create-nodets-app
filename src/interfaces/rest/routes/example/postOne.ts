import { RequestHandler, Request, Response, NextFunction } from 'express'
import postOne, { iPostOneRes } from '@business/postOne'

const postOneRoute: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    /* @business logic */
    const response: iPostOneRes = await postOne(req)

    res.json(response)
  } catch (e: any) {
    next(e)
  }
}

export default postOneRoute
