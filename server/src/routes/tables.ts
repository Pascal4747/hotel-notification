import { Router } from 'express';
import { query } from '../database/connection';
import { Table } from '../types/database';

const router = Router();

// Get all tables
router.get('/', async (req, res) => {
  try {
    const tables = await query<Table[]>('SELECT * FROM tables ORDER BY table_number');
    res.json(tables);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tables' });
  }
});

// Get table by ID
router.get('/:tableId', async (req, res) => {
  try {
    const [table] = await query<Table[]>(
      'SELECT * FROM tables WHERE table_id = ?',
      [req.params.tableId]
    );
    if (!table) {
      return res.status(404).json({ error: 'Table not found' });
    }
    res.json(table);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch table' });
  }
});

// Update table status
router.patch('/:tableId/status', async (req, res) => {
  const { status } = req.body;
  try {
    await query<Table[]>(
      'UPDATE tables SET status = ? WHERE table_id = ?',
      [status, req.params.tableId]
    );
    res.json({ message: 'Table status updated' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update table status' });
  }
});

export { router }; 
