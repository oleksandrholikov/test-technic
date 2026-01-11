import type { Request, Response, NextFunction } from 'express';

export default function formatEmail(
  req: Request, 
  res: Response, 
  next: NextFunction
): void {
  const { email } = req.body;

  
  if (typeof email === "string") {
    req.body = {
      ...req.body,
      email: email.toLowerCase().replace(/[\s\t\v]+/g, "")
    };
  }

  next();
}