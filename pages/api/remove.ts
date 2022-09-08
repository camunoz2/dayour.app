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
  let todo = encodeURI(req.query.todo)

  const token = process.env.UPSTASH_REDIS_REST_TOKEN
  const url =
    'https://us1-optimal-whippet-38298.upstash.io/lrem/todo/1/' +
    todo +
    '?_token=' +
    token
  // TODO: Change this fetch with async await
  return fetch(url)
    .then((r) => r.json())
    .then((data) => {
      let result = JSON.stringify(data.result)
      return res.status(200).json(result)
    })
}