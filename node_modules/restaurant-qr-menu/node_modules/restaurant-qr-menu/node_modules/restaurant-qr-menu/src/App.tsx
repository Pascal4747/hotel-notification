import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CustomerPage } from './pages/CustomerPage';
import { WaiterPage } from './pages/WaiterPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/:tableId" element={<CustomerPage />} />
        <Route path="/waiter" element={<WaiterPage />} />
      </Routes>
    </Router>
  );
};

export default App; 