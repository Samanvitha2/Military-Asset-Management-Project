-- Roles Table
CREATE TABLE Roles (
    role_id SERIAL PRIMARY KEY,
    role_name VARCHAR(50) UNIQUE NOT NULL
);

-- Bases Table
CREATE TABLE Bases (
    base_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL
);

-- Assets Table (MISSING in your script)
CREATE TABLE Assets (
    asset_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    type VARCHAR(100) NOT NULL,
    quantity INT NOT NULL,
    base_id INT REFERENCES Bases(base_id)
);

-- Personnel Table
CREATE TABLE Personnel (
    personnel_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    rank VARCHAR(50) NOT NULL,
    base_id INT REFERENCES Bases(base_id)
);

-- Purchases Table
CREATE TABLE Purchases (
    purchase_id SERIAL PRIMARY KEY,
    base_id INT REFERENCES Bases(base_id),
    purchase_date DATE NOT NULL,
    vendor_information TEXT
);

-- Purchase_Items Table
CREATE TABLE Purchase_Items (
    purchase_item_id SERIAL PRIMARY KEY,
    purchase_id INT REFERENCES Purchases(purchase_id),
    asset_id INT REFERENCES Assets(asset_id),
    quantity INT NOT NULL
);

-- Transfers Table
CREATE TABLE Transfers (
    transfer_id SERIAL PRIMARY KEY,
    from_base_id INT REFERENCES Bases(base_id),
    to_base_id INT REFERENCES Bases(base_id),
    transfer_date DATE NOT NULL,
    status VARCHAR(50) NOT NULL
);

-- Transfer_Items Table
CREATE TABLE Transfer_Items (
    transfer_item_id SERIAL PRIMARY KEY,
    transfer_id INT REFERENCES Transfers(transfer_id),
    asset_id INT REFERENCES Assets(asset_id),
    quantity INT NOT NULL
);

-- Assignments Table
CREATE TABLE Assignments (
    assignment_id SERIAL PRIMARY KEY,
    personnel_id INT REFERENCES Personnel(personnel_id),
    asset_id INT REFERENCES Assets(asset_id),
    quantity INT NOT NULL,
    assignment_date DATE NOT NULL,
    return_date DATE
);

-- Expenditures Table
CREATE TABLE Expenditures (
    expenditure_id SERIAL PRIMARY KEY,
    base_id INT REFERENCES Bases(base_id),
    asset_id INT REFERENCES Assets(asset_id),
    quantity INT NOT NULL,
    expenditure_date DATE NOT NULL,
    purpose TEXT
);

-- Users Table
CREATE TABLE Users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role_id INT REFERENCES Roles(role_id),
    base_id INT REFERENCES Bases(base_id)
);

-- RolePermissions Table
CREATE TABLE RolePermissions (
    role_id INT REFERENCES Roles(role_id),
    permission VARCHAR(255) NOT NULL,
    PRIMARY KEY (role_id, permission)
);
