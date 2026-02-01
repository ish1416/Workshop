import { User } from '@prisma/client';
import { DatabaseService } from './database';

export interface CreateUserData {
  email: string;
  name: string;
  age?: number;
}

export interface UpdateUserData {
  email?: string;
  name?: string;
  age?: number;
}

export class UserService {
  private db: DatabaseService;

  constructor(database: DatabaseService) {
    this.db = database;
  }

  async createUser(data: CreateUserData): Promise<User> {
    return await this.db.getPrismaClient().user.create({
      data
    });
  }

  async getAllUsers(): Promise<User[]> {
    return await this.db.getPrismaClient().user.findMany({
      orderBy: { createdAt: 'desc' }
    });
  }

  async getUserById(id: number): Promise<User | null> {
    return await this.db.getPrismaClient().user.findUnique({
      where: { id }
    });
  }

  async updateUser(id: number, data: UpdateUserData): Promise<User> {
    return await this.db.getPrismaClient().user.update({
      where: { id },
      data
    });
  }

  async deleteUser(id: number): Promise<User> {
    return await this.db.getPrismaClient().user.delete({
      where: { id }
    });
  }
}