export interface Asset {
    asset_id: number;
    name: string;
    description?: string;
    type: string;
    quantity: number;
    base_id: number;
}

export interface Assignment {
    assignment_id: number;
    personnel_id: number;
    asset_id: number;
    quantity: number;
    assignment_date: Date;
    return_date?: Date;
}

export interface Base {
    base_id: number;
    name: string;
    location: string;
}

export interface Expenditure {
    expenditure_id: number;
    base_id: number;
    asset_id: number;
    quantity: number;
    expenditure_date: Date;
    purpose?: string;
}

export interface Transfer {
    transfer_id: number;
    from_base_id: number;
    to_base_id: number;
    transfer_date: Date;
    status: string;
}

export interface User {
    user_id: number;
    username: string;
    password_hash: string;
    role_id: number;
    base_id: number;
}

export interface Role {
    role_id: number;
    role_name: string;
}

export interface RolePermission {
    role_id: number;
    permission: string;
}