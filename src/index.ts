import 'module-alias/register'

import app from './app'

app()
  .then(() => {
    console.log('Ready!')
  })
  .catch((e) => {
    throw e
  })
