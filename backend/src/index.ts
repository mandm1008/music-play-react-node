import express from 'express'
import cors from 'cors'
import routing from './routers'

const app = express()
const port = 3030

app.use(cors())
app.use(express.json())

routing(app)

app.listen(port, () => {
  console.log('http://localhost:' + port)
})
