import { Router } from 'express';
import { 
    createExpenditure, 
    getExpenditures, 
    getExpenditureById, 
    updateExpenditure, 
    deleteExpenditure 
} from '../controllers/expenditureController';

const router = Router();

// Route to create a new expenditure
router.post('/', createExpenditure);

// Route to get all expenditures
router.get('/', getExpenditures);

// Route to get a specific expenditure by ID
router.get('/:id', getExpenditureById);

// Route to update an existing expenditure
router.put('/:id', updateExpenditure);

// Route to delete an expenditure
router.delete('/:id', deleteExpenditure);

export default router;