import fs from 'fs'

const getCurrentTimeStamp = () => Date.now()

const saveTimestampToFile = (file) => {
	const timestamp = getCurrentTimeStamp()
	fs.writeFileSync(file, `${timestamp}`)
}

const writeTimeToFileInterval = (path, intervalTime) => {
	saveTimestampToFile(path)
	setTimeout(writeTimeToFileInterval, intervalTime, path, intervalTime)
}

const {
	LOG_PATH = './log-writer.log',
	INTERVAL = 5000
} = process.env

writeTimeToFileInterval(LOG_PATH, INTERVAL)