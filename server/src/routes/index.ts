import { Router } from 'express';
import { router as menuRouter } from './menu';
import { router as orderRouter } from './orders';
import { router as tableRouter } from './tables';
import { router as messageRouter } from './messages';
import { router as staffRouter } from './staff';

const router = Router();

router.use('/menu', menuRouter);
router.use('/orders', orderRouter);
router.use('/tables', tableRouter);
router.use('/messages', messageRouter);
router.use('/staff', staffRouter);

export { router }; 