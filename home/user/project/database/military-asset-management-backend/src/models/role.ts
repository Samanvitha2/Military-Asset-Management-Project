import { Schema, model } from 'mongoose';

const roleSchema = new Schema({
    role_name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    }
}, {
    timestamps: true
});

const Role = model('Role', roleSchema);

export default Role;