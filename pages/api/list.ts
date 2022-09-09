import { Redis } from '@upstash/redis'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {

  const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN
  })

  const user =  req.body.user
  const listIndex = req.body.listIndex

  const morningList = user + ':' + listIndex

  const list = await redis.lrange(morningList, 0, 10)
  res.status(200).json(list)

}
