import React from 'react';
import { OrderSummaryProps } from '../types';

export const OrderSummary: React.FC<OrderSummaryProps> = ({
  items,
  onQuantityChange,
  onCustomization,
}) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Your Order</h2>
      {items.map((item) => (
        <div key={item.id} className="mb-4 pb-4 border-b border-gray-200">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-gray-600 text-sm">KSH {item.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => onQuantityChange(item.id, -1)}
                className="bg-gray-200 text-gray-700 w-8 h-8 rounded-full hover:bg-gray-300"
              >
                -
              </button>
              <span className="w-8 text-center">{item.quantity}</span>
              <button
                onClick={() => onQuantityChange(item.id, 1)}
                className="bg-gray-200 text-gray-700 w-8 h-8 rounded-full hover:bg-gray-300"
              >
                +
              </button>
            </div>
          </div>
          <input
            type="text"
            placeholder="Add special instructions..."
            value={item.customization || ''}
            onChange={(e) => onCustomization(item.id, e.target.value)}
            className="w-full p-2 text-sm border border-gray-300 rounded-lg"
          />
        </div>
      ))}
      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <span className="font-semibold">Total:</span>
          <span className="font-semibold">KSH {total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}; 