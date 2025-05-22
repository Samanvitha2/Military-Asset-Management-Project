import { Request } from 'express';

declare module 'express' {
  export interface Request {
    userId?: number; // Or the correct type for your user IDs
    roleId?: number; // If roleId is also added by middleware
  }
} 