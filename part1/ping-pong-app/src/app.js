import express from 'express'
import { counterString, increaseCounter } from './services/counterService.js'

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

app.use('/', (_req, res) => {
  increaseCounter()
  res.send(counterString())
})

export default app
