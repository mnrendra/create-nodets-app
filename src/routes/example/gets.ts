const gets = (req: any, res: any, next: any) => {
  res.json({
    status: 'success',
    method: 'GET',
    query: req.query
  })
}

export default gets
