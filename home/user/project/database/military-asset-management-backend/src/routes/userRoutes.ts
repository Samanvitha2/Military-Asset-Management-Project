import { Router } from 'express';
import { registerUser, loginUser, getUserProfile, updateUser } from '../controllers/userController';

const router = Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', getUserProfile);
router.put('/profile', updateUser);

export default router;