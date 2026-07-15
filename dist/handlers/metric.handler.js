import { config } from '../config/config.js';
export const handlerMetric = (_req, res) => {
    const { fileserverHits } = config;
    res.set('Content-Type', 'text/html');
    res.write(`
    <html>
      <body>
        <h1>Welcome, Chirpy Admin</h1>
        <p>Chirpy has been visited ${fileserverHits} times!</p>
      </body>
    </html>
  `);
    res.end();
};
