import { Response } from 'express'

export const sendFailed = (res: Response, opt: any): void => {
  res.json({
    status: 'Failed',
    message: opt.message,
    payload: opt.payload
  })
}

export const sendError = (res: Response, err: any): void => {
  res.json({
    status: 'Error',
    error: err
  })
}

export const sendSuccess = (res: Response, opt: any): void => {
  res.json({
    status: 'Success',
    message: opt.message,
    payload: opt.payload
  })
}
