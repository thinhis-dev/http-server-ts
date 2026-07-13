import { Router } from 'express';
import { handlerReadiness } from '../handlers/health.handler.js';
const healthRouter = Router();
healthRouter.get('/', handlerReadiness);
export { healthRouter };
