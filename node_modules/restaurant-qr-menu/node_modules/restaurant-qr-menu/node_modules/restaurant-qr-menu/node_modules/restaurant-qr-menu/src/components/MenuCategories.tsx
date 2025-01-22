import React from 'react';
import { CategoryProps } from '../types';

const categories = [
  { id: 'food', label: 'Foods' },
  { id: 'beverages', label: 'Beverages & Drinks' },
  { id: 'desserts', label: 'Desserts' }
];

export const MenuCategories: React.FC<CategoryProps> = ({
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <nav className="flex space-x-4 mb-6 sticky top-0 bg-gray-100/80 backdrop-blur-sm py-2 z-20">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeCategory === category.id
              ? 'bg-gray-700 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {category.label}
        </button>
      ))}
    </nav>
  );
}; 
