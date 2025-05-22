import { Request, Response } from 'express';
import Base from '../models/base';
import Transfer from '../models/transfer';

// Create a new transfer
export const createTransfer = async (req: Request, res: Response) => {
  try {
    const { from_base_id, to_base_id, transfer_date, status } = req.body;
    const newTransfer = await Transfer.create({
      from_base_id,
      to_base_id,
      transfer_date,
      status
    });
    res.status(201).json(newTransfer);
  } catch (error) {
    res.status(500).json({ message: 'Error creating transfer', error });
  }
};

// Get all transfers
export const getTransfers = async (_req: Request, res: Response) => {
  try {
    const transfers = await Transfer.findAll({
      include: [
        { model: Base, as: 'from_base' },
        { model: Base, as: 'to_base' }
      ]
    });
    res.status(200).json(transfers);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving transfers', error });
  }
};

// Get a specific transfer by ID
export const getTransferById = async (req: Request, res: Response) => {
  try {
    const transfer = await Transfer.findOne({
      where: { transfer_id: req.params.id },
      include: [
        { model: Base, as: 'from_base' },
        { model: Base, as: 'to_base' }
      ]
    });
    
    if (!transfer) {
      return res.status(404).json({ message: 'Transfer not found' });
    }
    res.status(200).json(transfer);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving transfer', error });
  }
};

// Update a transfer
export const updateTransfer = async (req: Request, res: Response) => {
  try {
    const { from_base_id, to_base_id, transfer_date, status } = req.body;
    const [updated] = await Transfer.update(
      { from_base_id, to_base_id, transfer_date, status },
      { where: { transfer_id: req.params.id } }
    );
    
    if (updated === 0) {
      return res.status(404).json({ message: 'Transfer not found' });
    }
    
    const updatedTransfer = await Transfer.findOne({
      where: { transfer_id: req.params.id },
      include: [
        { model: Base, as: 'from_base' },
        { model: Base, as: 'to_base' }
      ]
    });
    res.status(200).json(updatedTransfer);
  } catch (error) {
    res.status(500).json({ message: 'Error updating transfer', error });
  }
};

// Delete a transfer
export const deleteTransfer = async (req: Request, res: Response) => {
  try {
    const deleted = await Transfer.destroy({
      where: { transfer_id: req.params.id }
    });
    
    if (!deleted) {
      return res.status(404).json({ message: 'Transfer not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Error deleting transfer', error });
  }
};
