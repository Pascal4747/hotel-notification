import { Router } from 'express';
import { query, transaction } from '../database/connection';
import { Order, OrderItem, ResultSetHeader } from '../types/database';

const router = Router();

// Create a new order
router.post('/', async (req, res) => {
  const { tableId, items, totalAmount } = req.body;

  try {
    const result = await transaction(async (connection) => {
      // Create order
      const [orderResult] = await connection.execute<ResultSetHeader>(
        'INSERT INTO orders (table_id, total_amount) VALUES (?, ?)',
        [tableId, totalAmount]
      );
      const orderId = orderResult.insertId;

      // Add order items
      for (const item of items) {
        await connection.execute(
          'INSERT INTO order_items (order_id, item_id, quantity, customization, special_instructions) VALUES (?, ?, ?, ?, ?)',
          [orderId, item.itemId, item.quantity, item.customization, item.specialInstructions]
        );
      }

      return orderId;
    });

    res.status(201).json({ orderId: result });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create order' });
  }
});

// Get orders by table
router.get('/table/:tableId', async (req, res) => {
  try {
    const orders = await query<(Order & OrderItem)[]>(
      `SELECT o.*, oi.*, mi.name, mi.price 
       FROM orders o 
       JOIN order_items oi ON o.order_id = oi.order_id 
       JOIN menu_items mi ON oi.item_id = mi.item_id 
       WHERE o.table_id = ? 
       ORDER BY o.created_at DESC`,
      [req.params.tableId]
    );
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
});

// Update order status
router.patch('/:orderId/status', async (req, res) => {
  const { status } = req.body;
  try {
    await query<Order[]>(
      'UPDATE orders SET status = ? WHERE order_id = ?',
      [status, req.params.orderId]
    );
    res.json({ message: 'Order status updated' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update order status' });
  }
});

export { router }; 