import React, { useState } from 'react';
import { MenuCategories } from '../components/MenuCategories';
import { MenuItem } from '../components/MenuItem';
import { OrderSummary } from '../components/OrderSummary';
import { ActionButtons } from '../components/ActionButtons';
import { Waves } from '../components/ui/waves-background';
import { MenuItem as MenuItemType, OrderItem } from '../types';
import { menuItems } from '../data/menuItems';

export const CustomerPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('food');
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const [darkMode, setDarkMode] = useState(false);
  const [customOrder, setCustomOrder] = useState('');

  const handleAddItem = (item: MenuItemType) => {
    setOrderItems((prev) => {
      const existingItem = prev.find((i) => i.id === item.id);
      if (existingItem) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const handleQuantityChange = (id: string, change: number) => {
    setOrderItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(0, item.quantity + change) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleCustomization = (id: string, text: string) => {
    setOrderItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, customization: text } : item
      )
    );
  };

  const handleCallWaiter = () => {
    // Implement waiter call functionality
    alert('Waiter has been called!');
  };

  const handleLeaveReview = () => {
    // Implement review functionality
    alert('Review feature coming soon!');
  };

  const handlePlaceOrder = () => {
    const order = {
      tableId: 'T1', // This should come from the URL or context
      items: orderItems,
      customOrders: customOrder ? [customOrder] : undefined,
      status: 'pending' as const,
      timestamp: new Date(),
    };
    
    // In a real app, this would be sent to an API
    console.log('Placing order:', order);
    alert('Order placed successfully!');
    setOrderItems([]);
    setCustomOrder('');
  };

  const filteredItems = menuItems.filter(
    (item) => item.category === activeCategory
  );

  // Group items by subcategory
  const groupedItems = filteredItems.reduce((acc, item) => {
    const subcategory = item.subcategory || 'Other';
    if (!acc[subcategory]) {
      acc[subcategory] = [];
    }
    acc[subcategory].push(item);
    return acc;
  }, {} as Record<string, MenuItemType[]>);

  return (
    <div className={`min-h-screen relative ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}>
      <Waves
        lineColor={darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}
        backgroundColor="transparent"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
      />
      <div className="relative z-10 h-screen flex flex-col">
        <header className="p-4 flex justify-between items-center bg-white/80 backdrop-blur-sm">
          <h1 className="text-2xl font-bold">Restaurant Menu</h1>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300"
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
            <a href="/about" className="text-gray-600 hover:text-gray-800">
              About
            </a>
          </div>
        </header>

        <main className="flex-1 container mx-auto p-4 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full">
            <div className="md:col-span-2 flex flex-col h-[calc(100vh-8rem)]">
              <MenuCategories
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
              />
              <div className="flex-1 overflow-y-auto pr-4 space-y-8">
                {Object.entries(groupedItems).map(([subcategory, items]) => (
                  <div key={subcategory} className="space-y-4">
                    <h2 className="text-xl font-semibold sticky top-0 bg-gray-100/80 backdrop-blur-sm py-2 z-10">
                      {subcategory}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {items.map((item) => (
                        <MenuItem key={item.id} item={item} onAdd={handleAddItem} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 h-[calc(100vh-8rem)] overflow-y-auto">
              <OrderSummary
                items={orderItems}
                onQuantityChange={handleQuantityChange}
                onCustomization={handleCustomization}
              />
              <div className="bg-white p-4 rounded-lg shadow-md">
                <textarea
                  placeholder="Add custom order or special requests..."
                  className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                  rows={3}
                  value={customOrder}
                  onChange={(e) => setCustomOrder(e.target.value)}
                />
              </div>
              <button
                onClick={handlePlaceOrder}
                className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Place Order
              </button>
              <ActionButtons
                onCallWaiter={handleCallWaiter}
                onLeaveReview={handleLeaveReview}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}; 