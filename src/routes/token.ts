import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();
const tokens = new Map<string, string>();

router.post("/", (req, res)=>{
    const {email} = req.body;

    const token = uuidv4();
    tokens.set(token, email);

    res.json({token});
})

export default router;
export {tokens};