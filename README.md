# Express TypeScript CRUD Server with Prisma

A TypeScript Express server implementing CRUD operations using Prisma ORM with MySQL database and object-oriented programming principles.

## Features

- TypeScript with Express.js
- Prisma ORM with MySQL
- Class-based architecture
- CRUD operations for User entity
- Error handling
- CORS enabled

## Setup

1. Install dependencies:
```bash
npm install
```

2. Set up database:
```bash
npx prisma migrate dev --name init
```

3. Generate Prisma client:
```bash
npx prisma generate
```

4. Start development server:
```bash
npm run dev
```

## API Endpoints

### Users CRUD

- `POST /api/users` - Create user
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### Health Check

- `GET /health` - Server health status

## Example Usage

### Create User
```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name": "John Doe", "email": "john@example.com", "age": 30}'
```

### Get All Users
```bash
curl http://localhost:3000/api/users
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