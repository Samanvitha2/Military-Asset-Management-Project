import { Request, Response } from 'express';
import Asset from '../models/asset';

// CREATE
export const createAsset = async (req: Request, res: Response) => {
    try {
        const asset = await Asset.create(req.body);
        res.status(201).json(asset);
    } catch (error) {
        const err = error as Error;
        res.status(400).json({ message: err.message });
    }
};

// READ ALL
export const getAllAssets = async (req: Request, res: Response) => {
    try {
        const assets = await Asset.findAll();
        res.status(200).json(assets);
    } catch (error) {
        const err = error as Error;
        res.status(500).json({ message: err.message });
    }
};

// READ ONE
export const getAssetById = async (req: Request, res: Response) => {
    try {
        const asset = await Asset.findByPk(req.params.id);
        if (!asset) {
            return res.status(404).json({ message: 'Asset not found' });
        }
        res.status(200).json(asset);
    } catch (error) {
        const err = error as Error;
        res.status(500).json({ message: err.message });
    }
};

// UPDATE
export const updateAsset = async (req: Request, res: Response) => {
    try {
        const [updated] = await Asset.update(req.body, { where: { asset_id: req.params.id } });
        if (!updated) {
            return res.status(404).json({ message: 'Asset not found' });
        }
        const updatedAsset = await Asset.findByPk(req.params.id);
        res.status(200).json(updatedAsset);
    } catch (error) {
        const err = error as Error;
        res.status(400).json({ message: err.message });
    }
};

// DELETE
export const deleteAsset = async (req: Request, res: Response) => {
    try {
        const deleted = await Asset.destroy({ where: { asset_id: req.params.id } });
        if (!deleted) {
            return res.status(404).json({ message: 'Asset not found' });
        }
        res.status(204).send();
    } catch (error) {
        const err = error as Error;
        res.status(500).json({ message: err.message });
    }
};