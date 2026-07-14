import { Router } from 'express'
import { handlerMetric } from '../handlers/metric.handler.js'

const metricRouter = Router()

metricRouter.get('/', handlerMetric)

export { metricRouter }
