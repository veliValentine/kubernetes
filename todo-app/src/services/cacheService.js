import dateService from './dateService.js'

const cache = {}

const isNewDate = () => {
  const currentDate = dateService.getCurrentDate()
  return cache[currentDate] !== currentDate
}

const saveRequestDate = () => {
  const currentDate = dateService.getCurrentDate()
  cache[currentDate] = currentDate
}

export default {
  isNewDate,
  saveRequestDate
}