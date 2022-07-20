import express from 'express'

import getMany from './getMany'
import getOne from './getOne'
import postOne from './postOne'
import putOne from './putOne'
import delOne from './delOne'

const router = express.Router()

router.get('/', getMany)
router.get('/:id', getOne)
router.post('/', postOne)
router.put('/:id', putOne)
router.delete('/:id', delOne)

export default router
