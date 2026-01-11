import type { Request, Response, NextFunction } from 'express';

export default function validEmail(
  req: Request, 
  res: Response, 
  next: NextFunction
): void {
    const { email } = req.body;

   
    const validChar = /^[\x20-\x7E]+$/;
    const emailRegex = /^(([^(){}\[\]\\.,;:\s@"]+(\.[^(){}\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}(\.[0-9]{1,3}){3}\])|(([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}))$/;

   
    if (email === undefined || email === null) {
        res.status(400).send({ success: false, message: "Missing field(s)" });
        return; 
    }
    
    
    if (typeof email !== "string" || !emailRegex.test(email) || !validChar.test(email)) {
        res.status(400).send({ success: false, message: "Email should have a valid format" });
        return;
    }   
    next();
}