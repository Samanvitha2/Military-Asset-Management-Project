import 'express';

declare module 'express' {
  export interface Request {
    userId?: string; // Assuming userId is a string. Adjust type if necessary.
  }
} 