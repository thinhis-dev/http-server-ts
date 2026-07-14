import { config } from '../config/config.js'
import { Middleware } from '../config/types.js'

export const middlewareMetricsInc: Middleware = (req, res, next) => {
  config.fileserverHits = (config.fileserverHits ?? 0) + 1

  next()
}
