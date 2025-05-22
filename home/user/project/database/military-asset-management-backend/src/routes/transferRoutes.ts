import {
  createTransfer,
  getTransfers,
  getTransferById,
  updateTransfer,
  deleteTransfer
} from '../controllers/transferController';
import { Router } from 'express';

const router = Router();

router.post('/', createTransfer);
router.get('/', getTransfers);
router.get('/:id', getTransferById);
router.put('/:id', updateTransfer);
router.delete('/:id', deleteTransfer);

export default router;