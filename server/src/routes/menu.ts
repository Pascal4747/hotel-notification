import { Router } from 'express';
import { query } from '../database/connection';
import { MenuItem } from '../types/database';

const router = Router();

// Get all menu items
router.get('/', async (req, res) => {
  try {
    const items = await query<MenuItem[]>(
      'SELECT * FROM menu_items WHERE is_available = true ORDER BY category, name'
    );
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch menu items' });
  }
});

// Get menu items by category
router.get('/category/:category', async (req, res) => {
  try {
    const items = await query<MenuItem[]>(
      'SELECT * FROM menu_items WHERE category = ? AND is_available = true ORDER BY name',
      [req.params.category]
    );
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch menu items' });
  }
});

export { router }; 