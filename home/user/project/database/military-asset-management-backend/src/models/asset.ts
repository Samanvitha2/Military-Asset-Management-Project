import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

const Asset = sequelize.define('Asset', {
    asset_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    base_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'Assets',
    timestamps: false
});

export default Asset;