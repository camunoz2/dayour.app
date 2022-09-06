import type { NextApiRequest, NextApiResponse } from 'next'
import { unstable_getServerSession } from 'next-auth/next'
import { authOptions } from './auth/[...nextauth]'

interface Data {
  responseMsg?: string
  errorMsg?: string
}

export default async function protectedHanlder(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const session = await unstable_getServerSession(req, res, authOptions)

  if (!session) {
    res.status(401).json({ responseMsg: 'Necesitas estar logeado' })
    return
  }

  return res.json({ errorMsg: 'Hola! bienvenid@' })
}
