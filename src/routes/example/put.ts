const put = (req: any, res: any, next: any) => {
  res.json({
    status: 'success',
    method: 'PUT',
    param: req.params.id,
    payload: req.body
  })
}

export default put
