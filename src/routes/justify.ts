import express from "express";
import { justifyText } from "../utils/justifyText.js";
import formatText from "../middlewares/formaters/text.js";
import validText from "../middlewares/validators/text.js";

const router = express.Router();

router.post("/", 
    validText,
    formatText,
    (req, res)=>{      
        const text = req.body;
        if(!text || typeof text !== "string") return res.status(404).send("No text provided!");

        const justifiedText = justifyText(text);
        res.type("text/plain").send(justifiedText) 
})

export default router;