import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

class Expenditure extends Model {
    public expenditure_id!: number;
    public base_id!: number;
    public asset_id!: number;
    public quantity!: number;
    public expenditure_date!: Date;
    public purpose!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Expenditure.init({
    expenditure_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    base_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Bases',
            key: 'base_id',
        },
    },
    asset_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Assets',
            key: 'asset_id',
        },
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    expenditure_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    purpose: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
}, {
    sequelize,
    tableName: 'Expenditures',
});

export default Expenditure;