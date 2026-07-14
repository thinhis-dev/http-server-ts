import { config } from '../config/config.js'
import { Handler } from '../config/types.js'

export const handlerReset: Handler = (_req, res) => {
  config.fileserverHits = 0

  res.send('Reset metric successfully')
}
