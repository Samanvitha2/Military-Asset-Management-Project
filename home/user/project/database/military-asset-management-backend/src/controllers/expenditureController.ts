import { Request, Response } from 'express';
import Expenditure from '../models/expenditure';

// Create a new expenditure
export const createExpenditure = async (req: Request, res: Response) => {
    try {
        const { base_id, asset_id, quantity, expenditure_date, purpose } = req.body;
        const newExpenditure = new Expenditure({
            base_id,
            asset_id,
            quantity,
            expenditure_date,
            purpose
        });
        await newExpenditure.save();
        res.status(201).json(newExpenditure);
    } catch (error) {
        res.status(500).json({ message: 'Error creating expenditure', error });
    }
};

// Get all expenditures
export const getExpenditures = async (req: Request, res: Response) => {
    try {

        const expenditures = await Expenditure.findAll();
        res.status(200).json(expenditures);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving expenditures', error });
    }
};

// Get expenditure by ID
export const getExpenditureById = async (req: Request, res: Response) => {
    try {
        const expenditure = await Expenditure.findByPk(req.params.id);
        if (!expenditure) {
            return res.status(404).json({ message: 'Expenditure not found' });
        }
        res.status(200).json(expenditure);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving expenditure', error });
    }
};

// Update an expenditure
export const updateExpenditure = async (req: Request, res: Response) => {
    try {
        const [updatedRows, [updatedExpenditure]] = await Expenditure.update(req.body, {
            where: { id: req.params.id },
            returning: true
        });
        if (!updatedRows) {
            return res.status(404).json({ message: 'Expenditure not found' });
        }
        res.status(200).json(updatedExpenditure);
    } catch (error) {
        res.status(500).json({ message: 'Error updating expenditure', error });
    }
};

// Delete an expenditure
export const deleteExpenditure = async (req: Request, res: Response) => {
    try {
        const deletedRows = await Expenditure.destroy({ where: { id: req.params.id } });
        if (!deletedRows) {
            return res.status(404).json({ message: 'Expenditure not found' });
        }
        res.status(200).json({ message: 'Expenditure deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting expenditure', error });
    }
};