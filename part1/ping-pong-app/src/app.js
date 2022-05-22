import express from 'express'
import { counter, increaseCounter } from './services/counterService.js'

const app = express()

app.use('/health', (_req, res) => {
  res.send('ok')
})

app.use('/', (_req, res) => {
  const pong = `pong ${counter}`
  increaseCounter()
  res.send(pong)
})

export default app
