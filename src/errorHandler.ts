export class ErrorHandler {
  static handlePrismaError(error: any): { status: number; message: string } {
    if (error.code === 'P2002') {
      return { status: 409, message: 'Email already exists' };
    }
    
    if (error.code === 'P2025') {
      return { status: 404, message: 'User not found' };
    }
    
    return { status: 500, message: 'Internal server error' };
  }
}