import express from 'express'
import dailyImageService from './services/dailyImageService.js'

const app = express()

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
