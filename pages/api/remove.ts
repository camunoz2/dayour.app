import { Redis } from "@upstash/redis"
import type { NextApiRequest, NextApiResponse } from "next"

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
})

export default async (req:NextApiRequest , res: NextApiResponse) => {

  const value = req.body.todoText
  const user = req.body.user
  const index = req.body.todoIndex

  const key = user + ':' + index

  await redis.lrem(key, 1, value)

  res.status(200)

  // TODO: What is this line doing?, at least it clear's the server console weird messages 😂
  res.end()
}