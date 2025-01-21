import { RowDataPacket, OkPacket, ResultSetHeader } from 'mysql2';

export interface Staff extends RowDataPacket {
  staff_id: number;
  username: string;
  password_hash: string;
  role: 'waiter' | 'admin';
  is_active: boolean;
}

export interface Table extends RowDataPacket {
  table_id: number;
  table_number: string;
  status: 'available' | 'occupied' | 'ordering' | 'serving';
  current_session_id: string | null;
}

export interface MenuItem extends RowDataPacket {
  item_id: number;
  name: string;
  description: string;
  price: number;
  category: 'food' | 'drinks' | 'desserts';
  image_url: string;
  is_available: boolean;
}

export interface Order extends RowDataPacket {
  order_id: number;
  table_id: number;
  status: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'served';
  total_amount: number;
  created_at: Date;
  updated_at: Date;
}

export interface OrderItem extends RowDataPacket {
  order_item_id: number;
  order_id: number;
  item_id: number;
  quantity: number;
  customization?: string;
  special_instructions?: string;
}

export interface Message extends RowDataPacket {
  message_id: number;
  table_id: number;
  sender_type: 'staff' | 'customer';
  message: string;
  created_at: Date;
  is_read: boolean;
}

export type QueryResult = RowDataPacket[] | RowDataPacket[][] | OkPacket | OkPacket[] | ResultSetHeader;
export { ResultSetHeader }; 
