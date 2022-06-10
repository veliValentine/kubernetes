import express from 'express'
import counterService from './services/counterService.js'

import './services/postgresService.js'

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
    const count = await counterService.increaseCounter()
    res.send(`Ping / Pongs: ${count}`)
  } catch (error) {
    res.status(500).json({ error })
  }
})

export default app
