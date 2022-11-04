import type { NextApiRequest, NextApiResponse } from 'next'
import { redis } from '../../lib/redisClient'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const value = req.body.todoText
  const user = req.body.user
  const index = req.body.todoIndex

  const key = user + ':' + index

  const push = await redis.lpush(key, value)

  res.status(200).end()
}
