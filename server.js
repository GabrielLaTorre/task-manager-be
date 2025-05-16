import http from 'http';
import dotenv from 'dotenv';
import { router } from './routes/routes.js';

dotenv.config();

const server = http.createServer((req, res) => {
    router(req, res)
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
