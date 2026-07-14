import { NextFunction, Request, Response } from 'express'

export type Middleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => void

export type APIConfig = {
  fileserverHits: number
}

export type Handler = (
  req: Request,
  res: Response
) => void
