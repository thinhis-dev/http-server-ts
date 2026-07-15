import { Router } from 'express';
import { handlerChirpsValidate } from '../handlers/validate.handler.js';
const validateRouter = Router();
validateRouter.post('/', handlerChirpsValidate);
export { validateRouter };
