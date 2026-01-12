import type { Request, Response, NextFunction } from "express";

export default function validText(
    req: Request, 
  res: Response, 
  next: NextFunction
): void {
    if(!req.body || typeof req.body !== "string"){
        res.status(400).send({success: false, message: "Invalid text body"});
        return;
    }

    const text = req.body;

    if(text.trim().length === 0){
        res.status(400).send({success: false, message: "Text cannot be empty"});
        return;
    }

    const htmlTagRegex = /<[^>]+>/;

    if(htmlTagRegex.test(text)){
        res.status(400).send({success: false, message: "Text cannot contain HTML tags"});
        return;

    }

    const validChar = /^[\p{L}\p{N}\p{P}\p{Z}\n\r]+$/u;

    if(!validChar.test(text)){
        res.status(400).send({success: false, message: "Text cannot contain invalid characters"});
        return;

    }

    next();
}