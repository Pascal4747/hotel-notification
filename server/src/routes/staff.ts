import { Router } from 'express';
import { query } from '../database/connection';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { AppError } from '../middleware/errorHandler';
import { Staff } from '../types/database';

const router = Router();

// Staff login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const [staff] = await query<Staff[]>(
      'SELECT * FROM staff WHERE username = ? AND is_active = true',
      [username]
    );

    if (!staff || !await bcrypt.compare(password, staff.password_hash)) {
      throw new AppError('Invalid credentials', 401);
    }

    const token = jwt.sign(
      { staffId: staff.staff_id, role: staff.role },
      process.env.JWT_SECRET!,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    res.json({
      token,
      staff: {
        staffId: staff.staff_id,
        username: staff.username,
        role: staff.role
      }
    });
  } catch (error) {
    if (error instanceof AppError) {
      res.status(error.statusCode).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Failed to login' });
    }
  }
});

// Get staff profile
router.get('/profile', async (req, res) => {
  const staffId = req.headers['staff-id'];
  
  try {
    const [staff] = await query<Staff[]>(
      'SELECT staff_id, username, role FROM staff WHERE staff_id = ? AND is_active = true',
      [staffId]
    );

    if (!staff) {
      throw new AppError('Staff not found', 404);
    }

    res.json(staff);
  } catch (error) {
    if (error instanceof AppError) {
      res.status(error.statusCode).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Failed to fetch profile' });
    }
  }
});

export { router }; 
