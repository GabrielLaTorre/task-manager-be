import http from 'http';
import dotenv from 'dotenv';

dotenv.config();

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!\n');
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
