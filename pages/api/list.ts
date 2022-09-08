import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {


  const {id} = req.query

  const token = process.env.UPSTASH_REDIS_REST_TOKEN
  // FIXME: pass data in this manner allow for any user to see others TODOS
  const url = `${process.env.UPSTASH_REDIS_REST_URL}/lrange/${id}/0/100?_token=${token}`

  // TODO: Change this fetch with async await
  return fetch(url)
    .then((d) => d.json())
    .then((data) => {
      const result = JSON.stringify(data.result)
      return res.status(200).json(result)
    })
}
