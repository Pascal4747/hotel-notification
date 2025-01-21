import { Routes, Route } from 'react-router-dom';
import QRScanner from './components/QRScanner';
import MenuDisplay from './components/MenuDisplay';
import CartManager from './components/CartManager';
import OrderStatus from './components/OrderStatus';
import ChatInterface from './components/ChatInterface';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<QRScanner />} />
        <Route path="/:tableId/menu" element={<MenuDisplay />} />
        <Route path="/:tableId/cart" element={<CartManager />} />
        <Route path="/:tableId/orders" element={<OrderStatus />} />
        <Route path="/:tableId/chat" element={<ChatInterface />} />
      </Routes>
    </div>
  );
}

export default App; 