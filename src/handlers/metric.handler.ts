import { config } from '../config/config.js'
import { Handler } from '../config/types.js'

export const handlerMetric: Handler = (_req, res) => {
  const { fileserverHits } = config

  res.send(`Hits: ${fileserverHits}`)
}
