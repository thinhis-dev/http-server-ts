import { Middleware } from '../config/types.js'

export const middlewareLogResponses: Middleware = (req, res, next) => {
  res.on('finish', () => {
    const { statusCode } = res

    if (statusCode !== 200) {
      console.log(`[NON-OK] ${req.method} ${req.url} - Status: ${statusCode}`)
    }
  })
  next()
}
