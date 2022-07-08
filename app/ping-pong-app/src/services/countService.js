import Count from '../models/Count.js'

export const PING_PONG_TYPE = 'ping-pong'

const findOne = async () => {
  const count = await Count.findOne({
    where: {
      type: PING_PONG_TYPE
    }
  })
  return count ?? await create()
}

const update = async (newCount) => {
  const count = await findOne() ?? await create()
  count.count = newCount
  return await count.save()
}

const create = async () => (
  await Count.create({
    count: 0,
    type: PING_PONG_TYPE
  })
)

export default {
  findOne,
  update
}