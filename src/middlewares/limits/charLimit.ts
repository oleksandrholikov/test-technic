import type { Request, Response, NextFunction } from "express";
import { checkCharLimit } from "../../utils/charLimiter.js";

export default function charLimit(
    req: Request,
    res: Response,
    next: NextFunction
){
    const token = (req as any).token;
    const text = req.body;

    const wordsCount = text.split(/\s+/).filter(Boolean).length;

    if(!checkCharLimit(token, wordsCount)){
        return res.status(402).send("Payment Required")
    }

    next();
}
