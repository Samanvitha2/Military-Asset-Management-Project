import { Model, DataTypes, Association } from 'sequelize';
import { sequelize } from '../config/database';
import Transfer from './transfer'; // Import the Transfer model

class Base extends Model {
    public base_id!: number;
    public name!: string;
    public location!: string;

    // Define associations
    public static associations: {
        originatingTransfers: Association<Base, Transfer>;
        receivingTransfers: Association<Base, Transfer>;
    };

    static associate(models: { Transfer: typeof Transfer }) {
        this.hasMany(models.Transfer, {
            foreignKey: 'from_base_id',
            as: 'originatingTransfers',
        });
        this.hasMany(models.Transfer, {
            foreignKey: 'to_base_id',
            as: 'receivingTransfers',
        });
    }
}

Base.init({
    base_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Base',
    tableName: 'Bases',
    timestamps: false,
});

export default Base;