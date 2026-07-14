import { config } from '../config/config.js';
export const handlerReset = (_req, res) => {
    config.fileserverHits = 0;
    res.send('Reset metric successfully');
};
