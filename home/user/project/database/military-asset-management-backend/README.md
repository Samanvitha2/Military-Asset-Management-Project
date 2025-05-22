# Military Asset Management System

## Overview
The Military Asset Management System is designed to efficiently manage military assets, including their movements, assignments, and expenditures across multiple bases. This system provides a secure and user-friendly interface for managing assets, ensuring accountability and traceability.

## Technology Stack
- **Node.js**: A JavaScript runtime for building scalable network applications.
- **Express**: A web application framework for Node.js, used to build RESTful APIs.
- **TypeScript**: A superset of JavaScript that adds static types, enhancing code quality and maintainability.
- **PostgreSQL**: A powerful, open-source relational database system for storing and managing data.
- **JWT (JSON Web Tokens)**: For secure user authentication and authorization.
- **bcrypt**: For hashing passwords to ensure secure user credentials.

## Features
- **Asset Management**: Create, retrieve, update, and delete assets.
- **Assignment Tracking**: Manage asset assignments to personnel and track assignment history.
- **Expenditure Recording**: Record and retrieve expenditures related to assets.
- **Transfer Management**: Manage transfers of assets between different bases.
- **User Management**: Handle user registration, authentication, and role-based access control.

## Setup Instructions
1. **Clone the Repository**
   ```
   git clone <repository-url>
   cd military-asset-management-backend
   ```

2. **Install Dependencies**
   ```
   npm install
   ```

3. **Configure Database**
   - Update the database configuration in `src/config/database.ts` with your PostgreSQL connection details.

4. **Run Migrations**
   - Ensure your database schema is set up according to the provided SQL scripts.

5. **Start the Application**
   ```
   npm start
   ```

## API Usage
- The API follows RESTful principles and can be accessed at `http://localhost:3000/api`.
- **Authentication**: Use JWT for securing routes. Include the token in the `Authorization` header for protected endpoints.
- **Endpoints**: Refer to the individual route files in `src/routes` for detailed API endpoints and their usage.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.