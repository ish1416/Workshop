import express, { Application } from 'express';
import cors from 'cors';
import { DatabaseService } from './database';
import { UserService } from './userService';
import { UserController } from './userController';
import { ValidationMiddleware } from './validation';

export class Server {
  private app: Application;
  private database: DatabaseService;
  private userService: UserService;
  private userController: UserController;
  private port: number;

  constructor(port: number = 3000) {
    this.app = express();
    this.port = port;
    this.database = new DatabaseService();
    this.userService = new UserService(this.database);
    this.userController = new UserController(this.userService);
    
    this.setupMiddleware();
    this.setupRoutes();
  }

  private setupMiddleware(): void {
    this.app.use(cors());
    this.app.use(express.json());
  }

  private setupRoutes(): void {
    // User CRUD routes
    this.app.post('/api/users', ValidationMiddleware.validateUserInput, this.userController.createUser);
    this.app.get('/api/users', this.userController.getAllUsers);
    this.app.get('/api/users/:id', this.userController.getUserById);
    this.app.put('/api/users/:id', this.userController.updateUser);
    this.app.delete('/api/users/:id', this.userController.deleteUser);

    // Health check
    this.app.get('/health', (req, res) => {
      res.json({ status: 'OK', timestamp: new Date().toISOString() });
    });
  }

  async start(): Promise<void> {
    try {
      await this.database.connect();
      console.log('Database connected successfully');
      
      this.app.listen(this.port, () => {
        console.log(`Server running on port ${this.port}`);
      });
    } catch (error) {
      console.error('Failed to start server:', error);
      process.exit(1);
    }
  }

  async stop(): Promise<void> {
    await this.database.disconnect();
  }
}