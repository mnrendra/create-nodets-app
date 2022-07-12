import 'dotenv/config'
import express from 'express'

const PORT = !Number.isNaN(Number(process.env.PORT)) ? Number(process.env.PORT) : 8080

const app = express()

app.get('/', (req, res) => {
  res.json({ hello: 'create-nodets-app!' })
})

app.listen(PORT, () => {
  console.log(`listen on port ${PORT}`)
})
