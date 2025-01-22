import React, { useState } from 'react';
import { TableOrder } from '../types';

// Sample orders data - in a real app, this would come from an API
const sampleOrders: TableOrder[] = [
  {
    tableId: 'T1',
    items: [
      {
        id: 'burger-classic',
        name: 'Classic Burger',
        price: 1050,
        category: 'food',
        subcategory: 'Burgers',
        quantity: 2,
        customization: 'Well done, extra cheese',
      },
      {
        id: 'shake-chocolate',
        name: 'Chocolate Shake',
        price: 450,
        category: 'beverages',
        subcategory: 'Classic Shakes',
        quantity: 1,
      }
    ],
    customOrders: ['Please bring extra napkins'],
    status: 'pending',
    timestamp: new Date(),
  },
];

export const WaiterPage: React.FC = () => {
  const [orders, setOrders] = useState<TableOrder[]>(sampleOrders);

  const handleStatusChange = (tableId: string, newStatus: TableOrder['status']) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.tableId === tableId ? { ...order, status: newStatus } : order
      )
    );
  };

  const getStatusColor = (status: TableOrder['status']) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'confirmed':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const calculateTotal = (items: TableOrder['items']) => {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold">Waiter Dashboard</h1>
        </div>
      </header>

      <main className="container mx-auto p-4">
        <div className="grid gap-4">
          {orders.map((order) => (
            <div
              key={order.tableId}
              className="bg-white p-4 rounded-lg shadow-md"
            >
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-xl font-semibold">Table {order.tableId}</h2>
                  <p className="text-sm text-gray-600">
                    Ordered at: {order.timestamp.toLocaleTimeString()}
                  </p>
                </div>
                <select
                  value={order.status}
                  onChange={(e) =>
                    handleStatusChange(
                      order.tableId,
                      e.target.value as TableOrder['status']
                    )
                  }
                  className={`p-2 border rounded-lg ${getStatusColor(order.status)}`}
                >
                  <option value="pending">Pending</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="completed">Completed</option>
                </select>
              </div>

              <div className="space-y-4">
                {/* Group items by subcategory */}
                {Object.entries(
                  order.items.reduce((acc, item) => {
                    const subcategory = item.subcategory || 'Other';
                    if (!acc[subcategory]) {
                      acc[subcategory] = [];
                    }
                    acc[subcategory].push(item);
                    return acc;
                  }, {} as Record<string, typeof order.items>)
                ).map(([subcategory, items]) => (
                  <div key={subcategory} className="border-b border-gray-200 pb-4">
                    <h3 className="font-medium text-gray-700 mb-2">{subcategory}</h3>
                    <div className="space-y-2">
                      {items.map((item) => (
                        <div
                          key={item.id}
                          className="flex justify-between items-start"
                        >
                          <div>
                            <p className="font-medium">
                              {item.quantity}x {item.name}
                            </p>
                            {item.customization && (
                              <p className="text-sm text-gray-600">
                                Note: {item.customization}
                              </p>
                            )}
                          </div>
                          <span className="text-gray-600">
                            KSH {(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Custom Orders */}
                {order.customOrders && order.customOrders.length > 0 && (
                  <div className="border-t border-gray-200 pt-4">
                    <h3 className="font-medium text-gray-700 mb-2">Special Requests</h3>
                    <ul className="list-disc list-inside space-y-1">
                      {order.customOrders.map((customOrder, index) => (
                        <li key={index} className="text-gray-600">
                          {customOrder}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Order Total */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-center font-semibold">
                    <span>Total:</span>
                    <span>KSH {calculateTotal(order.items).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}; 