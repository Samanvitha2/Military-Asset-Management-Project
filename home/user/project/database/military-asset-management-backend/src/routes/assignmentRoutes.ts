import { Router } from 'express';
import { createAssignment, getAllAssignments } from '../controllers/assignmentController';

const router = Router();

router.post('/', createAssignment);
router.get('/', getAllAssignments);

export default router;