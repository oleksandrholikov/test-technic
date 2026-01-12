import type { Request, Response, NextFunction } from 'express';

export default function formatText (
    req: Request, 
    res: Response, 
    next: NextFunction
){
    if(typeof req.body === "string"){
        req.body = req.body
        .replace(/\s+/g, " ")
        .replace(/\n{2,}/g, "\n")
        .trim();
    }
    next();
}