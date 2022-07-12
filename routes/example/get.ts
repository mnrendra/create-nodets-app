const get = (req: any, res: any, next: any) => {
  res.json({
    status: 'success',
    method: 'GET (by Id)',
    param: req.params.id
  })
}

export default get
