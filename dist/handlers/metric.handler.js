import { config } from '../config/config.js';
export const handlerMetric = (_req, res) => {
    const { fileserverHits } = config;
    res.send(`Hits: ${fileserverHits}`);
};
