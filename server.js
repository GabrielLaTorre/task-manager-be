import http from 'http';
import dotenv from 'dotenv';
import { router } from './routes/routes.js';
import { corsMiddleware } from './middlewares/cors.js';

dotenv.config();

const server = http.createServer((req, res) => {

    // CORS middleware
    const shouldReturn = corsMiddleware(req, res);

    if (shouldReturn) {
        return;
    }

    router(req, res)
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
