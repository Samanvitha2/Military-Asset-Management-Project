import { Request, Response } from 'express';
import User from '../models/user';

// Define a custom interface that extends Express.Request
interface AuthenticatedRequest extends Request {
  userId?: string;
}

export const updateUser = async (req: AuthenticatedRequest, res: Response) => {
    const userId = req.userId; // This should now work without TypeScript errors
    const { username, role_id, base_id } = req.body;

    try {
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.username = username || user.username;
        user.role_id = role_id || user.role_id;
        user.base_id = base_id || user.base_id;

        await user.save();
        res.json({ message: 'User updated successfully', user });
    } catch (error) {
        res.status(500).json({ message: 'Error updating user', error });
    }
};

export const getUserProfile = async (req: AuthenticatedRequest, res: Response) => {
    const userId = req.userId;

    try {
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user profile', error });
    }
};

// Add other user-related controller functions here...