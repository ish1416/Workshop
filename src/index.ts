import dotenv from 'dotenv';
import { Server } from './server';

dotenv.config();

const port = parseInt(process.env.PORT || '3000');
const server = new Server(port);

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('Shutting down server...');
  await server.stop();
  process.exit(0);
});

server.start();