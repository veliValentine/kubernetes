import axios from 'axios'
import fs from 'fs'
import config from '../utils/config.js'
import cacheService from './cacheService.js'

const {
  IMAGE_FOLDER_PATH
} = config

const dailyImagePath = IMAGE_FOLDER_PATH + '/daily_image.jpg'

const getDailyImagePath = async () => {
  const image = getDailyImageFromVolume(dailyImagePath)
  const isNewDate = cacheService.isNewDate()
  if (image && !isNewDate) {
    return dailyImagePath
  }
  const newImage = await fetchImage()
  saveDailyImage(dailyImagePath, newImage)
  cacheService.saveRequestDate()
  return dailyImagePath
}

const getDailyImageFromVolume = (path) => {
  try {
    return fs.readFileSync(path)
  } catch (error) {
    return null
  }
}

const saveDailyImage = (path, image) => {
  createFolderIfExsists(IMAGE_FOLDER_PATH)
  fs.writeFileSync(path, image)
}

const createFolderIfExsists = (folderPath) => {
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath)
  }
}

const fetchImage = async () => {
  const { data } = await axios.get('https://picsum.photos/1200', {
    responseType: 'arraybuffer'
  })
  return data
}

export default {
  getDailyImagePath
}