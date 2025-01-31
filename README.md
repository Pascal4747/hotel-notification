# Restaurant QR Menu System

A modern, responsive web application for restaurant menu management and ordering system.

## Features

- Customer Interface:
  - Browse menu by categories
  - Add items to order with customizations
  - Adjust item quantities
  - Place orders
  - Call waiter
  - Leave reviews
  - Dark mode support

- Waiter Interface:
  - View all active orders
  - Update order status
  - Monitor table activities
  - Respond to customer calls

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- React Router
- Vite

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to:
   - Customer view: `http://localhost:5173/T1` (where T1 is the table number)
   - Waiter view: `http://localhost:5173/waiter`

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Project Structure

```
src/
├── components/       # Reusable UI components
├── pages/           # Page components
├── types/           # TypeScript type definitions
└── App.tsx          # Main application component
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request 