import { v4 as uuidv4 } from 'uuid'

const INTERVAL_TIME = process.env.INTERVAL_TIME ?? 5000

const id = uuidv4()

const logIdWithTimestamp = () => {
  const time = new Date().toISOString()
  console.log(`${time}: ${id}`)
}

const startInterval = () => {
  logIdWithTimestamp()
  setInterval(logIdWithTimestamp, INTERVAL_TIME)
}

startInterval()
