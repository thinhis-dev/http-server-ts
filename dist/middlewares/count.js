import { config } from '../config/config.js';
export const middlewareMetricsInc = (req, res, next) => {
    config.fileserverHits = (config.fileserverHits ?? 0) + 1;
    next();
};
