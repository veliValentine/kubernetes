import config from '../utils/config.js'
import { writeToFile } from './fileWriter.js'

export let counter = 0

export const increaseCounter = () => {
	counter++
	writeCounterToFile()
	return counter
}

export const counterString = () => `Ping / Pongs: ${counter}`

const writeCounterToFile = () => {
	writeToFile(config.PING_PONG_PATH, counterString())
}
