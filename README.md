# Express TypeScript CRUD Server with Prisma

A production-ready TypeScript Express server implementing CRUD operations using Prisma ORM with MySQL database and object-oriented programming principles.

## 🚀 Features

- **TypeScript** with Express.js framework
- **Prisma ORM 5.16.0** (stable version) with MySQL
- **Class-based OOP architecture** with proper separation of concerns
- **Complete CRUD operations** for User entity (not TODO)
- **Error handling** and validation
- **CORS enabled** for cross-origin requests
- **Health check endpoint** for monitoring
- **Environment configuration** with dotenv

## 📁 Project Structure

```
src/
├── database.ts      # DatabaseService class - Prisma client management
├── userService.ts   # UserService class - Business logic layer
├── userController.ts # UserController class - HTTP request handlers
├── server.ts        # Server class - Express app configuration
└── index.ts         # Application entry point
prisma/
├── schema.prisma    # Database schema definition
└── migrations/      # Database migration files
```

## 🛠️ Setup & Installation

### Prerequisites
- Node.js (v16 or higher)
- MySQL database running
- npm or yarn package manager

### Installation Steps

1. **Clone the repository:**
```bash
git clone <repository-url>
cd express-prisma-crud
```

2. **Install dependencies:**
```bash
npm install
```

3. **Environment setup:**
Create `.env` file with your database URL:
```env
DATABASE_URL="mysql://username:password@localhost:3306/database_name"
PORT=3000
```

4. **Database setup:**
```bash
# Run migrations to create tables
npx prisma migrate dev --name init

# Generate Prisma client
npx prisma generate
```

5. **Build the project:**
```bash
npm run build
```

6. **Start development server:**
```bash
npm run dev
```

## 📊 Database Schema

### User Model
```prisma
model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String
  age       Int?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## 🔗 API Endpoints

### Users CRUD Operations

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|-------------|
| POST | `/api/users` | Create new user | `{"name": "string", "email": "string", "age": number}` |
| GET | `/api/users` | Get all users | - |
| GET | `/api/users/:id` | Get user by ID | - |
| PUT | `/api/users/:id` | Update user | `{"name"?: "string", "email"?: "string", "age"?: number}` |
| DELETE | `/api/users/:id` | Delete user | - |

### System Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/health` | Server health status |

## 📝 API Usage Examples

### Create User
```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name": "John Doe", "email": "john@example.com", "age": 30}'
```

**Response:**
```json
{
  "id": 1,
  "email": "john@example.com",
  "name": "John Doe",
  "age": 30,
  "createdAt": "2024-01-01T12:00:00.000Z",
  "updatedAt": "2024-01-01T12:00:00.000Z"
}
```

### Get All Users
```bash
curl http://localhost:3000/api/users
```

### Get User by ID
```bash
curl http://localhost:3000/api/users/1
```

### Update User
```bash
curl -X PUT http://localhost:3000/api/users/1 \
  -H "Content-Type: application/json" \
  -d '{"name": "Jane Doe", "age": 25}'
```

### Delete User
```bash
curl -X DELETE http://localhost:3000/api/users/1
```

### Health Check
```bash
curl http://localhost:3000/health
```

**Response:**
```json
{
  "status": "OK",
  "timestamp": "2024-01-01T12:00:00.000Z"
}
```

## 🏗️ Architecture

### Class-Based Design

- **DatabaseService**: Manages Prisma client connection and lifecycle
- **UserService**: Contains business logic for user operations
- **UserController**: Handles HTTP requests and responses
- **Server**: Configures Express application and middleware

### Error Handling
- Comprehensive error handling with appropriate HTTP status codes
- Validation for required fields and data types
- Database constraint error handling

## 🚀 Available Scripts

```bash
npm run dev          # Start development server with ts-node
npm run build        # Build TypeScript to JavaScript
npm start            # Start production server
npm run prisma:generate  # Generate Prisma client
npm run prisma:migrate   # Run database migrations
npm run prisma:studio    # Open Prisma Studio
```

## 🔧 Technologies Used

- **Runtime**: Node.js
- **Language**: TypeScript
- **Framework**: Express.js
- **ORM**: Prisma 5.16.0
- **Database**: MySQL
- **Development**: ts-node
- **Environment**: dotenv
- **CORS**: cors middleware

## 📦 Dependencies

### Production
- `@prisma/client`: Database client
- `express`: Web framework
- `cors`: CORS middleware
- `dotenv`: Environment variables

### Development
- `prisma`: Database toolkit
- `typescript`: TypeScript compiler
- `ts-node`: TypeScript execution
- `@types/*`: Type definitions

## 🔒 Environment Variables

```env
DATABASE_URL=mysql://username:password@localhost:3306/database_name
PORT=3000
```

## 🧪 Testing

The API has been tested with all CRUD operations:
- ✅ User creation
- ✅ User retrieval (all and by ID)
- ✅ User updates
- ✅ User deletion
- ✅ Health check endpoint

## 📄 License

MIT License

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'feat: add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📞 Support

For support and questions, please open an issue in the repository.