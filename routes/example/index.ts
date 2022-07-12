import express from 'express'

import gets from './gets'
import get from './get'
import post from './post'
import put from './put'
import del from './del'

const router = express.Router()

router.get('/', gets)
router.get('/:id', get)
router.post('/', post)
router.put('/:id', put)
router.delete('/:id', del)

export default router
