import type { NextApiRequest, NextApiResponse } from 'next'
import { redis } from '../../lib/redisClient'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const user = req.body.user
  const listIndex = req.body.listIndex

  const morningList = user + ':' + listIndex

  const list = await redis.lrange(morningList, 0, 10)
  res.status(200).json(list)
}
