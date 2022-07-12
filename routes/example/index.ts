import express from 'express'

const router = express.Router()

router.get('/', (req, res, next) => {
  res.json({
    status: 'success',
    method: 'GET',
    query: req.query
  })
})

router.get('/:id', (req, res, next) => {
  res.json({
    status: 'success',
    method: 'GET (by Id)',
    param: req.params.id
  })
})

export default router
