import { Model, DataTypes, Association } from 'sequelize';
import { sequelize } from '../config/database';
import Base from './base'; // Import the Base model

class Transfer extends Model {
    public transfer_id!: number;
    public from_base_id!: number;
    public to_base_id!: number;
    public transfer_date!: Date;
    public status!: string;

    // Define associations
    public static associations: {
        fromBase: Association<Transfer, Base>;
        toBase: Association<Transfer, Base>;
    };

    static associate(models: { Base: typeof Base }) {
        this.belongsTo(models.Base, {
            foreignKey: 'from_base_id',
            as: 'fromBase',
        });
        this.belongsTo(models.Base, {
            foreignKey: 'to_base_id',
            as: 'toBase',
        });
    }
}

Transfer.init({
    transfer_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    from_base_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Bases',
            key: 'base_id',
        },
    },
    to_base_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Bases',
            key: 'base_id',
        },
    },
    transfer_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Transfer',
    tableName: 'Transfers',
    timestamps: false,
});

export default Transfer;