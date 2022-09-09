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

  await redis.lpush(key, value)


  res.status(200)

  // TODO: What is this line doing?, at least it clear's the server console weird messages 😂
  res.end()
}


















// import type { NextApiRequest, NextApiResponse } from 'next'

// interface ExtendedNextApiRequest extends NextApiRequest {
//   query: {
//     todo: string
//     user: string
//   }
// }

// export default async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
//   let query = req.query

//   if (!req.query) {
//     res.send(query)
//     return res.status(400).send('todo parameter required.')
//   }
//   let todo = encodeURI(req.query.todo)
//   let user = encodeURI(req.query.user)

//   console.log(todo);
  
//   // FIXME: Sanitize the todo data
//   let token = process.env.UPSTASH_REDIS_REST_TOKEN
//   const url = `${process.env.UPSTASH_REDIS_REST_URL}/lpush/${user}/${todo}?_token=${token}`


//   // TODO: Change this fetch with async await
//   return fetch(url)
//     .then((r) => r.json())
//     .then((data) => {
//       let result = JSON.stringify(data.result)
//       return res.status(200).json(result)
//     })
// }
