import express from 'express';
import authRoutes from '../auth-routes';
import { authenticateToken } from '../../middleware/auth';  // Use .js if compiled


const router = express.Router();

router.use('/api/auth', authRoutes);

// Example protected route
router.get('/api/protected', authenticateToken, (req, res) => {
  res.json({ message: 'Access granted', user: req.user });
});

export default router;
