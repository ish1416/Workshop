import { Request, Response } from 'express';
import { UserService } from './userService';
import { ErrorHandler } from './errorHandler';
import { Logger } from './logger';

export class UserController {
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  createUser = async (req: Request, res: Response): Promise<void> => {
    try {
      Logger.info(`Creating user: ${req.body.email}`);
      const user = await this.userService.createUser(req.body);
      res.status(201).json(user);
    } catch (error: any) {
      Logger.error('Error creating user', error);
      const { status, message } = ErrorHandler.handlePrismaError(error);
      res.status(status).json({ error: message });
    }
  };

  getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
      const users = await this.userService.getAllUsers();
      res.json(users);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  };

  getUserById = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = parseInt(req.params.id);
      const user = await this.userService.getUserById(id);
      
      if (!user) {
        res.status(404).json({ error: 'User not found' });
        return;
      }
      
      res.json(user);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  };

  updateUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = parseInt(req.params.id);
      const user = await this.userService.updateUser(id, req.body);
      res.json(user);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };

  deleteUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = parseInt(req.params.id);
      await this.userService.deleteUser(id);
      res.status(204).send();
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };
}