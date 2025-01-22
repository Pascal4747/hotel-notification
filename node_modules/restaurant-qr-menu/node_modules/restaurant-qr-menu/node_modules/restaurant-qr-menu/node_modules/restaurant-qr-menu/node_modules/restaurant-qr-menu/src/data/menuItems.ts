export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: 'food' | 'beverages' | 'desserts';
  subcategory?: string;
  description?: string;
  options?: {
    name: string;
    price: number;
  }[];
}

export const menuItems: MenuItem[] = [
  // Foods
  {
    id: 'breakfast-1',
    name: 'Quick Fix Breakfast',
    price: 600,
    category: 'food',
    subcategory: 'Breakfast',
    description: '2 eggs, sausages, toast, grilled tomato, BBQ beans'
  },
  {
    id: 'breakfast-2',
    name: 'Sunrise Breakfast',
    price: 750,
    category: 'food',
    subcategory: 'Breakfast',
    description: 'With juice, wedges'
  },
  {
    id: 'breakfast-3',
    name: 'Full Breakfast',
    price: 1400,
    category: 'food',
    subcategory: 'Breakfast',
    description: 'With bacon'
  },
  {
    id: 'eggs',
    name: 'Eggs',
    price: 200,
    category: 'food',
    subcategory: 'Breakfast',
    description: 'Choose style: Fried, Boiled, Poached, Scrambled, Sunny-Side-up'
  },
  {
    id: 'omelette-plain',
    name: 'Plain Omelette',
    price: 250,
    category: 'food',
    subcategory: 'Breakfast'
  },
  {
    id: 'omelette-spanish',
    name: 'Spanish Omelette',
    price: 300,
    category: 'food',
    subcategory: 'Breakfast'
  },
  {
    id: 'french-toast',
    name: 'French Toast',
    price: 250,
    category: 'food',
    subcategory: 'Breakfast'
  },
  {
    id: 'pancakes',
    name: 'Origin Pancakes',
    price: 300,
    category: 'food',
    subcategory: 'Breakfast'
  },
  {
    id: 'fruit-salad',
    name: 'Fresh Tropical Fruit Salad',
    price: 400,
    category: 'food',
    subcategory: 'Breakfast'
  },
  // Burgers
  {
    id: 'burger-veg',
    name: 'Vegetarian Burger',
    price: 850,
    category: 'food',
    subcategory: 'Burgers',
    description: 'Served with Fries'
  },
  {
    id: 'burger-classic',
    name: 'Classic Burger',
    price: 1050,
    category: 'food',
    subcategory: 'Burgers',
    description: 'Choice of Beef or Chicken, served with Fries'
  },
  {
    id: 'burger-beef',
    name: 'Beef Burger',
    price: 1250,
    category: 'food',
    subcategory: 'Burgers',
    description: 'Served with Fries'
  },
  {
    id: 'burger-tikka',
    name: 'Chicken Tikka Burger',
    price: 1450,
    category: 'food',
    subcategory: 'Burgers',
    description: 'Served with Fries'
  },
  // Steakhouse
  {
    id: 'steak-tenderloin',
    name: 'Beef Tenderloin',
    price: 1150,
    category: 'food',
    subcategory: 'Steakhouse'
  },
  {
    id: 'steak-lamb',
    name: 'Lamb Chops',
    price: 1350,
    category: 'food',
    subcategory: 'Steakhouse'
  },
  {
    id: 'steak-pork',
    name: 'Pork Chops',
    price: 1390,
    category: 'food',
    subcategory: 'Steakhouse'
  },
  {
    id: 'steak-tbone',
    name: 'T-bone Steak',
    price: 1550,
    category: 'food',
    subcategory: 'Steakhouse'
  },
  {
    id: 'chicken-quarter',
    name: 'Quarter Chicken with fries',
    price: 990,
    category: 'food',
    subcategory: 'Steakhouse'
  },
  {
    id: 'chicken-breast',
    name: 'Grilled Chicken Breast',
    price: 1090,
    category: 'food',
    subcategory: 'Steakhouse'
  },
  {
    id: 'fish-chips',
    name: 'English Fish & Chips',
    price: 1350,
    category: 'food',
    subcategory: 'Steakhouse'
  },
  // Classic Pizza
  {
    id: 'pizza-margherita',
    name: 'Margherita Pizza',
    price: 990,
    category: 'food',
    subcategory: 'Classic Pizza'
  },
  {
    id: 'pizza-indian',
    name: 'Indian Pizza',
    price: 1090,
    category: 'food',
    subcategory: 'Classic Pizza'
  },
  {
    id: 'pizza-hawaiian',
    name: 'Hawaiian Pizza',
    price: 1190,
    category: 'food',
    subcategory: 'Classic Pizza'
  },
  {
    id: 'pizza-bbq',
    name: 'BBQ Chicken Pizza',
    price: 1190,
    category: 'food',
    subcategory: 'Classic Pizza'
  },
  {
    id: 'pizza-beef',
    name: 'Beef Bonanza',
    price: 1190,
    category: 'food',
    subcategory: 'Classic Pizza'
  },
  {
    id: 'pizza-mushroom',
    name: 'Chicken & Mushroom',
    price: 1190,
    category: 'food',
    subcategory: 'Classic Pizza'
  },
  // Signature Pizza
  {
    id: 'pizza-feta',
    name: 'Chicken & Feta Pizza',
    price: 1390,
    category: 'food',
    subcategory: 'Signature Pizza'
  },
  {
    id: 'pizza-paneer',
    name: 'Paneer Pizza',
    price: 1390,
    category: 'food',
    subcategory: 'Signature Pizza'
  },
  {
    id: 'pizza-greek',
    name: 'Greek Pizza',
    price: 1590,
    category: 'food',
    subcategory: 'Signature Pizza'
  },
  {
    id: 'pizza-supreme',
    name: 'Origin BBQ Supreme Pizza',
    price: 1790,
    category: 'food',
    subcategory: 'Signature Pizza'
  },
  // Pasta & Stir Fry
  {
    id: 'noodles-veg',
    name: 'Vegetable Noodles',
    price: 600,
    category: 'food',
    subcategory: 'Pasta & Stir Fry'
  },
  {
    id: 'pasta-bolognese',
    name: 'Spaghetti Bolognese',
    price: 750,
    category: 'food',
    subcategory: 'Pasta & Stir Fry'
  },
  {
    id: 'noodles-chicken',
    name: 'Chicken Noodles',
    price: 850,
    category: 'food',
    subcategory: 'Pasta & Stir Fry'
  },
  {
    id: 'pasta-pesto',
    name: 'Penne Pesto with Chicken',
    price: 1300,
    category: 'food',
    subcategory: 'Pasta & Stir Fry'
  },
  // Sides
  {
    id: 'fries-plain',
    name: 'Plain French Fries',
    price: 290,
    category: 'food',
    subcategory: 'Sides'
  },
  {
    id: 'fries-masala',
    name: 'Masala French Fries',
    price: 450,
    category: 'food',
    subcategory: 'Sides'
  },
  {
    id: 'fries-garlic',
    name: 'Garlic French Fries',
    price: 350,
    category: 'food',
    subcategory: 'Sides'
  },
  {
    id: 'fries-mushroom',
    name: 'Mushroom Fries',
    price: 490,
    category: 'food',
    subcategory: 'Sides'
  },
  {
    id: 'salad-garden',
    name: 'Garden Salad',
    price: 350,
    category: 'food',
    subcategory: 'Sides'
  },
  {
    id: 'vegetables-mixed',
    name: 'Mixed Vegetables',
    price: 200,
    category: 'food',
    subcategory: 'Sides'
  },
  {
    id: 'potato-mashed',
    name: 'Mashed Potato',
    price: 200,
    category: 'food',
    subcategory: 'Sides'
  },

  // Beverages
  // Hot Beverages
  {
    id: 'coffee-black',
    name: 'Black Coffee',
    price: 180,
    category: 'beverages',
    subcategory: 'Hot Beverages',
    options: [
      { name: 'Single', price: 180 },
      { name: 'Double', price: 200 }
    ]
  },
  {
    id: 'coffee-cappuccino',
    name: 'Cappuccino',
    price: 250,
    category: 'beverages',
    subcategory: 'Hot Beverages',
    options: [
      { name: 'Single', price: 250 },
      { name: 'Double', price: 280 }
    ]
  },
  {
    id: 'coffee-latte',
    name: 'Caffe Latte',
    price: 280,
    category: 'beverages',
    subcategory: 'Hot Beverages',
    options: [
      { name: 'Single', price: 280 },
      { name: 'Double', price: 350 }
    ]
  },
  {
    id: 'coffee-espresso',
    name: 'Espresso',
    price: 180,
    category: 'beverages',
    subcategory: 'Hot Beverages',
    options: [
      { name: 'Single', price: 180 },
      { name: 'Double', price: 200 }
    ]
  },
  {
    id: 'coffee-americano',
    name: 'Americano',
    price: 180,
    category: 'beverages',
    subcategory: 'Hot Beverages',
    options: [
      { name: 'Single', price: 180 },
      { name: 'Double', price: 200 }
    ]
  },
  {
    id: 'coffee-mocha',
    name: 'Mocha',
    price: 350,
    category: 'beverages',
    subcategory: 'Hot Beverages',
    options: [
      { name: 'Single', price: 350 },
      { name: 'Double', price: 380 }
    ]
  },
  // Classic Shakes
  {
    id: 'shake-vanilla',
    name: 'Vanilla Shake',
    price: 450,
    category: 'beverages',
    subcategory: 'Classic Shakes'
  },
  {
    id: 'shake-strawberry',
    name: 'Strawberry Shake',
    price: 450,
    category: 'beverages',
    subcategory: 'Classic Shakes'
  },
  {
    id: 'shake-chocolate',
    name: 'Chocolate Shake',
    price: 450,
    category: 'beverages',
    subcategory: 'Classic Shakes'
  },
  {
    id: 'shake-mango',
    name: 'Mango Shake',
    price: 450,
    category: 'beverages',
    subcategory: 'Classic Shakes'
  },
  {
    id: 'shake-tropical',
    name: 'Tropical Shake',
    price: 450,
    category: 'beverages',
    subcategory: 'Classic Shakes'
  },
  {
    id: 'shake-pistanut',
    name: 'Pistanut Shake',
    price: 450,
    category: 'beverages',
    subcategory: 'Classic Shakes'
  },
  // Signature Shakes
  {
    id: 'shake-oreo',
    name: 'Oreo Shake',
    price: 500,
    category: 'beverages',
    subcategory: 'Signature Shakes'
  },
  {
    id: 'shake-peppermint',
    name: 'Peppermint Shake',
    price: 550,
    category: 'beverages',
    subcategory: 'Signature Shakes'
  },
  {
    id: 'shake-espresso',
    name: 'Espresso Shake',
    price: 550,
    category: 'beverages',
    subcategory: 'Signature Shakes'
  },
  {
    id: 'shake-mocha',
    name: 'Mocha Shake',
    price: 550,
    category: 'beverages',
    subcategory: 'Signature Shakes'
  },
  {
    id: 'shake-blueberry',
    name: 'Blue Berry Shake',
    price: 550,
    category: 'beverages',
    subcategory: 'Signature Shakes'
  },
  // Smoothies
  {
    id: 'smoothie-banana',
    name: 'Banana Smoothie',
    price: 300,
    category: 'beverages',
    subcategory: 'Smoothies'
  },
  {
    id: 'smoothie-mango',
    name: 'Mango Smoothie',
    price: 300,
    category: 'beverages',
    subcategory: 'Smoothies'
  },
  {
    id: 'smoothie-tropical',
    name: 'Tropical Smoothie',
    price: 400,
    category: 'beverages',
    subcategory: 'Smoothies'
  },
  {
    id: 'smoothie-strawberry',
    name: 'Strawberry Smoothie',
    price: 450,
    category: 'beverages',
    subcategory: 'Smoothies'
  },
  // Soft Drinks
  {
    id: 'soda-coke',
    name: 'Coke',
    price: 150,
    category: 'beverages',
    subcategory: 'Soft Drinks'
  },
  {
    id: 'soda-fanta',
    name: 'Fanta',
    price: 150,
    category: 'beverages',
    subcategory: 'Soft Drinks'
  },
  {
    id: 'soda-sprite',
    name: 'Sprite',
    price: 150,
    category: 'beverages',
    subcategory: 'Soft Drinks'
  },
  {
    id: 'soda-ginger',
    name: 'Ginger Ale',
    price: 150,
    category: 'beverages',
    subcategory: 'Soft Drinks'
  },
  {
    id: 'soda-tonic',
    name: 'Tonic Water',
    price: 150,
    category: 'beverages',
    subcategory: 'Soft Drinks'
  },
  {
    id: 'soda-water',
    name: 'Soda Water',
    price: 150,
    category: 'beverages',
    subcategory: 'Soft Drinks'
  },

  // Desserts
  {
    id: 'dessert-icecream',
    name: 'Ice Cream Scoop',
    price: 200,
    category: 'desserts'
  },
  {
    id: 'dessert-sundae',
    name: 'Oreo Sundae',
    price: 450,
    category: 'desserts'
  },
  {
    id: 'dessert-brownie',
    name: 'Chocolate Brownie',
    price: 600,
    category: 'desserts'
  },
  {
    id: 'dessert-fruit',
    name: 'Origin Tropical Fruit Platter',
    price: 500,
    category: 'desserts'
  }
]; 