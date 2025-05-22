import { Request, Response } from 'express';
import Base from '../models/base';
import Transfer from '../models/transfer';

// Get all bases
export const getBases = async (_req: Request, res: Response) => {
    try {
        const bases = await Base.findAll();
        res.status(200).json(bases);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving bases', error });
    }
};

// Get a specific base by ID
export const getBaseById = async (req: Request, res: Response) => {
    try {
        const base = await Base.findByPk(req.params.id, {
            include: [
                { model: Transfer, as: 'outgoing_transfers' },
                { model: Transfer, as: 'incoming_transfers' }
            ]
        });
        
        if (!base) {
            return res.status(404).json({ message: 'Base not found' });
        }
        res.status(200).json(base);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving base', error });
    }
};

// Create a new base
export const createBase = async (req: Request, res: Response) => {
    try {
        const { name, location } = req.body;
        const newBase = await Base.create({ name, location });
        res.status(201).json(newBase);
    } catch (error) {
        res.status(500).json({ message: 'Error creating base', error });
    }
};

// Update a base
export const updateBase = async (req: Request, res: Response) => {
    try {
        const { name, location } = req.body;
        const [updated] = await Base.update(
            { name, location },
            { where: { base_id: req.params.id } }
        );
        
        if (updated === 0) {
            return res.status(404).json({ message: 'Base not found' });
        }
        
        const updatedBase = await Base.findByPk(req.params.id);
        res.status(200).json(updatedBase);
    } catch (error) {
        res.status(500).json({ message: 'Error updating base', error });
    }
};

// Delete a base
export const deleteBase = async (req: Request, res: Response) => {
    try {
        const deleted = await Base.destroy({
            where: { base_id: req.params.id }
        });
        
        if (!deleted) {
            return res.status(404).json({ message: 'Base not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting base', error });
    }
};