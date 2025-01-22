import React, { useState } from 'react';
import { MenuItemProps } from '../types';

export const MenuItem: React.FC<MenuItemProps> = ({ item, onAdd }) => {
  const [selectedOption, setSelectedOption] = useState(
    item.options ? item.options[0] : null
  );

  const displayPrice = selectedOption ? selectedOption.price : item.price;

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <p className="text-gray-600 text-sm">KSH {displayPrice.toFixed(2)}</p>
        </div>
      </div>
      {item.description && (
        <p className="text-gray-600 text-sm mb-3">{item.description}</p>
      )}
      {item.options && (
        <div className="mb-3">
          <select
            className="w-full p-2 border border-gray-300 rounded-lg"
            value={selectedOption?.name}
            onChange={(e) => {
              const option = item.options?.find(opt => opt.name === e.target.value);
              setSelectedOption(option || null);
            }}
          >
            {item.options.map((option) => (
              <option key={option.name} value={option.name}>
                {option.name} - KSH {option.price.toFixed(2)}
              </option>
            ))}
          </select>
        </div>
      )}
      <button
        onClick={() => onAdd({ ...item, price: displayPrice })}
        className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors w-full"
      >
        Add to Order
      </button>
    </div>
  );
}; 