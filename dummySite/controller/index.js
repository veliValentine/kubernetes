import axios from 'axios'

import http from 'http'

import config from './utils/config.js'
import logger from './utils/logger.js'

const getSite = async (url = 'https://example.com/') => {
  try {
    const { data } = await axios.get(url)
    return data
  } catch (error) {
    const errorMessage = error?.response?.data ?? error?.message ?? error
    logger.error(errorMessage)
  }
}

const createSite = (html = '<h1>Nothing to show!</h1>') => {
  http.createServer((_req, res) => {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    })
    res.write(html)
    res.end()
  }).listen(config.PORT)
  logger.log(`Server running on port: ${config.PORT}`)
}

createSite()