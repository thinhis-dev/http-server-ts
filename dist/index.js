import express from 'express';
import { healthRouter } from './routes/health.routes.js';
const PORT = 8080;
const app = express();
app.use('/healthz', healthRouter);
app.use('/app', express.static('./src/app'));
app.use('/app', express.static('./src/app/assets'));
app.listen(PORT, () => {
    console.log(`Server is running at ::${PORT}`);
});
