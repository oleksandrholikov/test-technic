import type { Request, Response, NextFunction } from "express";
import { tokens } from "../../routes/token.js";

export default function authToken(
    req: Request,
    res: Response,
    next: NextFunction
){
    const auth = req.headers.authorization;

    if(!auth)
        return res.status(401).send("Missing token!");

    const token = auth.replace("Bearer ", "").trim();

    if(!tokens.has(token)) {
        return res.status(403).send("Invalid token!");        
    }

    (req as any).token = token;
    next();
}