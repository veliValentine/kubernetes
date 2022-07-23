import axios from 'axios'
import http from 'http'
import https from 'https'
import config, { PROD } from './utils/config.js'
import logger from './utils/logger.js'

const getErrorMessage = error => error?.response?.data ?? error?.message ?? error

const urlHost = config.NODE_ENV === PROD ? 'https://localhost:43133' : 'http://localhost:8080'

const dummySitesApiUrl = '/apis/stable.dwk/v1/dummysites'

const sendRequestToApi = async (api, method = 'get') => {
  try {
    const url = `${urlHost}${api}`

    logger.log('Sending request to api', JSON.stringify({ method, url }))
    const { data } = await axios[method](url, {
      httpsAgent: new https.Agent({
        rejectUnauthorized: false
      }),
      headers: {
        Authorization: config.BEARER_TOKEN
      }
    })
    return data
  } catch (error) {
    const errorMessage = getErrorMessage(error)
    logger.error('Error sending request to api.', JSON.stringify({ api, method }), 'Error message:', errorMessage)
  }
}


const getDummySiteInfo = async () => {
  const dummySitesResponse = await sendRequestToApi(dummySitesApiUrl)

  const dummySites = dummySitesResponse.items

  if (!dummySites?.length) {
    throw new Error('no dummy sites')
  }
  const url = dummySites[0].spec.website_url
  return { url }
}

const getSite = async (url) => {
  try {
    const { data } = await axios.get(url)
    return data
  } catch (error) {
    const errorMessage = getErrorMessage(error)
    logger.error('Error fetching site:', errorMessage)
  }
}

const createServer = (html = '<h1>Nothing to show!</h1>') => {
  const requestListener = (_req, res) => {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    })
    res.write(html)
    res.end()
  }
  const server = http.createServer(requestListener)

  const port = config.PORT
  server.listen(port)
  logger.log(`Server running on port: ${port}`)
}

const app = async () => {
  const { url } = await getDummySiteInfo()
  const site = await getSite(url)
  createServer(site)
}

app().catch(console.error)
