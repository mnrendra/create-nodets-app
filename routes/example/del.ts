const del = (req: any, res: any, next: any) => {
  res.json({
    status: 'success',
    method: 'DELETE',
    param: req.params.id,
    payload: req.body
  })
}

export default del
