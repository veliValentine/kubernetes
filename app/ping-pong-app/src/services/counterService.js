import countService from './countService.js'

const getCount = async () => {
  const { count } = await countService.findOne() ?? {}
  return count ?? -1
}

const increaseCounter = async () => {
  const oldCount = await getCount()
  const { count } = await countService.update(oldCount + 1)
  return count
}

export default {
  getCount,
  increaseCounter
}
