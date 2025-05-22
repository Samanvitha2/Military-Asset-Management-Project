import { Request, Response } from 'express';
import Assignment from '../models/assignment';

// Create a new assignment
export const createAssignment = async (req: Request, res: Response) => {
    try {
        const { personnel_id, asset_id, quantity, assignment_date, return_date } = req.body;
        const newAssignment = new Assignment({
            personnel_id,
            asset_id,
            quantity,
            assignment_date,
            return_date
        });
        await newAssignment.save();
        res.status(201).json(newAssignment);
    } catch (error) {
        res.status(500).json({ message: 'Error creating assignment', error });
    }
};

// Retrieve assignment history for a specific asset
export const getAssignmentHistory = async (req: Request, res: Response) => {
    try {
        const { asset_id } = req.params;
        const assignments = await Assignment.findAll({ where: { asset_id } });
        res.status(200).json(assignments);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving assignment history', error });
    }
};

// Retrieve all assignments
export const getAllAssignments = async (req: Request, res: Response) => {
    try {
        const assignments = await Assignment.findAll();
        res.status(200).json(assignments);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving assignments', error });
    }
};

// Update an assignment
export const updateAssignment = async (req: Request, res: Response) => {
    try {
        const { assignment_id } = req.params;
        const updatedAssignment = await Assignment.update(req.body, { where: { assignment_id }, returning: true });
        if (!updatedAssignment[1].length) {
            return res.status(404).json({ message: 'Assignment not found' });
        }
        res.status(200).json(updatedAssignment[1][0]);
    } catch (error) {
        res.status(500).json({ message: 'Error updating assignment', error });
    }
};

// Delete an assignment
export const deleteAssignment = async (req: Request, res: Response) => {
    try {
        const { assignment_id } = req.params;
        const deletedCount = await Assignment.destroy({ where: { assignment_id } });
        if (!deletedCount) {
            return res.status(404).json({ message: 'Assignment not found' });
        }
        res.status(200).json({ message: 'Assignment deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting assignment', error });
    }
};