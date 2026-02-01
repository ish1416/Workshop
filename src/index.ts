import dotenv from 'dotenv';
import { Server } from './server';
import { Logger } from './logger';
import { CONFIG } from './constants';

dotenv.config();

const port = parseInt(process.env.PORT || CONFIG.DEFAULT_PORT.toString());
const server = new Server(port);

// Graceful shutdown
process.on('SIGINT', async () => {
  Logger.info('Shutting down server...');
  await server.stop();
  process.exit(0);
});

Logger.info('Starting Express TypeScript server...');
server.start();