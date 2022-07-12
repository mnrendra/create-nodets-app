const post = (req: any, res: any, next: any) => {
  res.json({
    status: 'success',
    method: 'POST',
    payload: req.body
  })
}

export default post
