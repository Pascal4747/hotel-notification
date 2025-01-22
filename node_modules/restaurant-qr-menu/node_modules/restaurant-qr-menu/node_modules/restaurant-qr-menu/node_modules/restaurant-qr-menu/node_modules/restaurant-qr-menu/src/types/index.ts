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

export interface OrderItem extends MenuItem {
  quantity: number;
  customization?: string;
}

export interface TableOrder {
  tableId: string;
  items: OrderItem[];
  customOrders?: string[];
  status: 'pending' | 'confirmed' | 'completed';
  timestamp: Date;
}

export interface CategoryProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export interface MenuItemProps {
  item: MenuItem;
  onAdd: (item: MenuItem) => void;
}

export interface OrderSummaryProps {
  items: OrderItem[];
  onQuantityChange: (id: string, change: number) => void;
  onCustomization: (id: string, text: string) => void;
}

export interface ActionButtonsProps {
  onCallWaiter: () => void;
  onLeaveReview: () => void;
} 