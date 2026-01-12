import type { Request, Response, NextFunction } from 'express';

export default function formatText (
    req: Request, 
    res: Response, 
    next: NextFunction
){
    if(typeof req.body === "string"){
        req.body = req.body        
        .replace(/[ \t\v]+/g, " ")      
        .replace(/\n{3,}/g, "\n")      
        .replace(/[ \t]+$/gm, "")
        .trim();       
    }
    next();
}