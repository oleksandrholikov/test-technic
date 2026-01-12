import express from "express";
import { justifyText } from "../utils/justifyText.js";
import { checkCharLimit } from "../utils/charLimiter.js";
import formatText from "../middlewares/formaters/text.js";
import validText from "../middlewares/validators/text.js";
import { tokens } from "../routes/token.js";


const router = express.Router();

router.post("/", 
    validText,
    formatText,
    (req, res)=>{
        
    const auth = req.headers.authorization;
    if(!auth) return res.status(401).send("Missing token!");

    const token = auth.replace("Bearer ", "").trim();
    if(!tokens.has(token)) return res.status(403).send("Invalid token!");

    const text = req.body;
    if(!text || typeof text !== "string") return res.status(404).send("No text provided!");

    const wordsCount = text.split(/\s+/).filter(Boolean).length;
    if(!checkCharLimit(token, wordsCount)) return res.status(402).send("Payment Required")

    const justifiedText = justifyText(text);
    res.type("text/plain").send(justifiedText) 
})

export default router;