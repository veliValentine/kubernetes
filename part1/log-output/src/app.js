import express from 'express'
import { getCurrentTimestamp } from './services/dateService.js'
import fileService from './services/fileService.js'
import { createId, ID } from './services/idService.js'

const app = express()

app.use('/health', (_req, res) => {
  res.send('ok')
})

app.use('/status', (_req, res) => {
  const currentTime = getCurrentTimestamp()
  const status = `${currentTime}: ${ID}`
  res.send(status)
})

app.use('/read', (_req, res) => {
  try {
    const hash = createId()
    const logs = fileService.readLog()
    console.log({ logs })
    res.json({
      hash,
      logs
    })
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message })
    }
  }
})

export default app
