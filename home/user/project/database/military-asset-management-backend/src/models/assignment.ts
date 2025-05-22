import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';
import Asset from './asset';
import Personnel from './user';

class Assignment extends Model {
    public assignment_id!: number;
    public personnel_id!: number;
    public asset_id!: number;
    public quantity!: number;
    public assignment_date!: Date;
    public return_date!: Date | null;

    public static associate() {
        Assignment.belongsTo(Personnel, { foreignKey: 'personnel_id' });
        Assignment.belongsTo(Asset, { foreignKey: 'asset_id' });
    }
}

Assignment.init(
    {
        assignment_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        personnel_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        asset_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        assignment_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        return_date: {
            type: DataTypes.DATE,
            allowNull: true,
        },
    },
    {
        sequelize,
        modelName: 'Assignment',
        tableName: 'Assignments',
        timestamps: false,
    }
);

export default Assignment;