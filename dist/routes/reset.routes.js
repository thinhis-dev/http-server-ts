import { Router } from 'express';
import { handlerReset } from '../handlers/reset.handler.js';
const resetRouter = Router();
resetRouter.post('/', handlerReset);
export { resetRouter };
