import express from "express";
import { justifyText } from "../utils/justifyText.js";
import formatText from "../middlewares/formaters/text.js";
import validText from "../middlewares/validators/text.js";
import authToken from "../middlewares/auth/token.js";
import charLimit from "../middlewares/limits/charLimit.js";


const router = express.Router();

router.post("/", 
    validText,
    formatText,
    authToken,
    charLimit,
    (req, res)=>{

    const text = req.body;    

    const justifiedText = justifyText(text);
    res.type("text/plain").send(justifiedText) 
})

export default router;