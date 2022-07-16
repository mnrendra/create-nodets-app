export const sendFailed = (res: any, opt: any): void => {
  res.json({
    status: 'Failed',
    message: opt.message,
    payload: opt.payload
  })
}

export const sendError = (res: any, err: any): void => {
  res.json({
    status: 'Error',
    error: err
  })
}

export const sendSuccess = (res: any, opt: any): void => {
  res.json({
    status: 'Success',
    message: opt.message,
    payload: opt.payload
  })
}
