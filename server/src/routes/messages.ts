import { Router } from 'express';
import { query } from '../database/connection';
import { Message, ResultSetHeader } from '../types/database';

const router = Router();

// Get messages for a table
router.get('/table/:tableId', async (req, res) => {
  try {
    const messages = await query<Message[]>(
      'SELECT * FROM messages WHERE table_id = ? ORDER BY created_at DESC',
      [req.params.tableId]
    );
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
});

// Create a new message
router.post('/', async (req, res) => {
  const { tableId, senderType, message } = req.body;
  try {
    const result = await query<ResultSetHeader>(
      'INSERT INTO messages (table_id, sender_type, message) VALUES (?, ?, ?)',
      [tableId, senderType, message]
    );
    res.status(201).json({ messageId: result.insertId });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create message' });
  }
});

// Mark messages as read
router.patch('/read', async (req, res) => {
  const { tableId, senderType } = req.body;
  try {
    await query<ResultSetHeader>(
      'UPDATE messages SET is_read = true WHERE table_id = ? AND sender_type = ?',
      [tableId, senderType]
    );
    res.json({ message: 'Messages marked as read' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to mark messages as read' });
  }
});

export { router }; 
