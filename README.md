# Restaurant Ordering System

A dual-interface restaurant ordering system with real-time updates.

## Project Structure

```
restaurant-ordering/
├── client/
│   ├── customer-app/     # Customer-facing application
│   └── staff-app/        # Staff management interface
├── server/               # Backend server
│   ├── src/             # Source code
│   ├── database/        # Database migrations and seeds
│   └── websocket/       # WebSocket server implementation
└── shared/
    └── types/           # Shared TypeScript types
```

## Prerequisites

- Node.js (v18 or later)
- MySQL (v8 or later)
- npm (v9 or later)

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up the database:
   - Create a MySQL database
   - Copy `.env.example` to `.env` in the server directory
   - Update the database credentials in `.env`

3. Build shared types:
   ```bash
   cd shared/types
   npm run build
   ```

4. Start the development servers:
   ```bash
   # Start all services
   npm run dev

   # Or start individual services
   npm run dev:server
   npm run dev:customer
   npm run dev:staff
   ```

## Available Scripts

- `npm run dev` - Start all development servers
- `npm run build` - Build all applications
- `npm run dev:server` - Start backend server
- `npm run dev:customer` - Start customer application
- `npm run dev:staff` - Start staff application

## Features

### Customer Interface
- QR code scanning for table identification
- Menu browsing and searching
- Real-time order status updates
- Chat with staff
- Order customization
- Cart management

### Staff Interface
- Real-time order dashboard
- Table management
- Order processing
- Customer communication
- Staff authentication
- Order history

## Tech Stack

- Frontend:
  - React + Vite
  - TypeScript
  - Tailwind CSS
  - Socket.IO Client
  - Zustand (State Management)

- Backend:
  - Node.js + Express
  - TypeScript
  - MySQL
  - Socket.IO
  - JWT Authentication

## License

This project is private and proprietary. 