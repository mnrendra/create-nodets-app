import getMany, { iGetManyRes, defGetManyRes } from './getMany'
import getOne, { iGetOneRes, defGetOneRes } from './getOne'
import postOne, { iPostOneRes, defPostOneRes } from './postOne'
import putOne, { iPutOneRes, defPutOneRes } from './putOne'
import delOne, { iDelOneRes, defDelOneRes } from './delOne'

export {
  // getMany
  iGetManyRes,
  defGetManyRes,
  // getOne
  iGetOneRes,
  defGetOneRes,
  // postOne
  iPostOneRes,
  defPostOneRes,
  // putOne
  iPutOneRes,
  defPutOneRes,
  // delOne
  iDelOneRes,
  defDelOneRes
}

export default {
  getMany,
  getOne,
  postOne,
  putOne,
  delOne
}
