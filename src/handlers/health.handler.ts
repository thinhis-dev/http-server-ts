import { Request, Response } from 'express'

export const handlerReadiness = async (_req: Request, res: Response) => {
  res.set({
    'Content-Type': 'text/plain',
    charset: 'utf-8',
  })

  res.send('200 OK')
}
