import express from 'express'
import { getCurrentTimestamp } from './services/dateService.js'
import { ID } from './services/idService.js'

const app = express()

app.use('/health', (_req, res) => {
	res.send('ok')
})

app.use('/status', (_req, res) => {
	const currentTime = getCurrentTimestamp()
	const status = `${currentTime}: ${ID}`
	res.send(status)
})

export default app
