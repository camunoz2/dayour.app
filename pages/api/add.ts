import type { NextApiRequest, NextApiResponse } from 'next'

interface ExtendedNextApiRequest extends NextApiRequest {
  query: {
    todo: string
  }
}

export default async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
  if (!req.query.todo) {
    return res.status(400).send('todo parameter required.')
  }
  let token = process.env.UPSTASH_REDIS_REST_TOKEN
  let todo = encodeURI(req.query.todo)

  const url = `${process.env.UPSTASH_REDIS_REST_URL}/lpush/todo/${todo}?_token=${token}`
  // TODO: Change this fetch with async await
  return fetch(url)
    .then((r) => r.json())
    .then((data) => {
      let result = JSON.stringify(data.result)
      return res.status(200).json(result)
    })
}
