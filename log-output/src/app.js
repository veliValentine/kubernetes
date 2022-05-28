import express from 'express'
import { getCurrentTimestamp } from './services/dateService.js'
import fileService from './services/fileService.js'
import { createId, ID } from './services/idService.js'
import pingPongService from './services/pingPongService.js'

const app = express()

app.use((req, res, next) => {
  if (req.path === '/favicon.ico') {
    return res.status(418).send('No favicon.ico')
  }
  next()
})

app.use('/health', (_req, res) => {
  res.send('ok')
})

app.use('/', async (_req, res) => {
  try {
    const currentTime = getCurrentTimestamp()
    const pingPongs = await pingPongService.getPingPong()
    const response = lines(
      `${currentTime}: ${ID}`,
      pingPongs
    )
    res.send(response)
  } catch (error) {
    console.error(error?.response?.data ?? error?.message ?? error)
    res.status(500).json({ error })
  }
})

const lines = (...lines) => lines.join('<br/>')

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
