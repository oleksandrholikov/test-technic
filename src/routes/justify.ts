import express from "express";
import { justifyText } from "../utils/justifyText.js";
import { checkCharLimit } from "../utils/charLimiter.js";
import formatText from "../middlewares/formaters/text.js";
import validText from "../middlewares/validators/text.js";
import { authToken } from "../middlewares/auth/token.js";

const router = express.Router();

router.post("/", 
    validText,
    formatText,
    authToken,
    (req, res)=>{

    const text = req.body;
    if(!text || typeof text !== "string") return res.status(404).send("No text provided!");

    const wordsCount = text.split(/\s+/).filter(Boolean).length;
    if(!checkCharLimit(token, wordsCount)) return res.status(402).send("Payment Required")

    const justifiedText = justifyText(text);
    res.type("text/plain").send(justifiedText) 
})

export default router;