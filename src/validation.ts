import { Request, Response, NextFunction } from 'express';

export class ValidationMiddleware {
  static validateUserInput = (req: Request, res: Response, next: NextFunction): void => {
    const { name, email } = req.body;
    
    if (!name || !email) {
      res.status(400).json({ error: 'Name and email are required' });
      return;
    }
    
    if (!email.includes('@')) {
      res.status(400).json({ error: 'Invalid email format' });
      return;
    }
    
    next();
  };
}