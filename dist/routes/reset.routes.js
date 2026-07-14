import { Router } from 'express';
import { handlerReset } from '../handlers/reset.handler.js';
const resetRouter = Router();
resetRouter.get('/', handlerReset);
export { resetRouter };
