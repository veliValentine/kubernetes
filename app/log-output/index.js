import app from './src/app.js'
import logIdWithTimestamp from './src/logIdTimestamp.js'
import config from './src/utils/config.js'
import logger from './src/utils/logger.js'

logIdWithTimestamp()

const { PORT } = config

app.listen(PORT, () => {
  logger.log(`Server started in port ${PORT}`)
})
