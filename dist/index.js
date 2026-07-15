import express from 'express';
import { healthRouter } from './routes/health.routes.js';
import { middlewareLogResponses } from './middlewares/logging.js';
import { middlewareMetricsInc } from './middlewares/count.js';
import { metricRouter } from './routes/metric.routes.js';
import { resetRouter } from './routes/reset.routes.js';
import { validateRouter } from './routes/validate.routes.js';
const PORT = 8080;
const app = express();
// middleware
app.use(middlewareLogResponses);
app.use('/app', middlewareMetricsInc);
app.use(express.json());
app.use('/admin/metrics', metricRouter);
app.use('/admin/reset', resetRouter);
app.use('/api/healthz', healthRouter);
app.use('/api/validate_chirp', validateRouter);
app.use('/app', express.static('./src/app'));
app.use('/app', express.static('./src/app/assets'));
app.listen(PORT, () => {
    console.log(`Server is running at ::${PORT}`);
});
