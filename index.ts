import 'dotenv/config'
import express from 'express'
import routes from './routes'

const PORT = !Number.isNaN(Number(process.env.PORT)) ? Number(process.env.PORT) : 8080

const app = express()

app.use(express.json())
app.use(routes)

app.listen(PORT, () => {
  console.log(`listen on port ${PORT}`)
})
