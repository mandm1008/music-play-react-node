import express from 'express'
import cors from 'cors'
import routing from './routers'

const app = express()
const port = 3030

app.use(express.json())
app.use(cors())

routing(app)

app.listen(port, () => {
  console.log('http://localhost:' + port)
})
