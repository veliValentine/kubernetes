import express from 'express'
import dailyImageService from './services/dailyImageService.js'
import cors from 'cors'

import todoController from './controllers/todoController.js'
import middleware from './middleware/index.js'

const app = express()
app.use(cors())
app.use(express.json())

app.use(middleware.logRequest)

app.use('/todos', todoController)

app.get('/health', (_req, res) => {
  res.send('ok')
})

app.get('/picture', async (_req, res) => {
  try {
    const dailyImagePath = await dailyImageService.getDailyImagePath()
    res.sendFile(dailyImagePath)
  } catch (error) {
    console.error(error?.response?.date ?? error?.message ?? error)
  }
})

export default app
