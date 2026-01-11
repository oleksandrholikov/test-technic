import express from "express";
import { justifyText } from "../utils/justifyText.js";

const router = express.Router();

router.post("/", (req, res)=>{
    const text = req.body;
    if(!text || typeof text !== "string") return res.status(404).send("No text provided!");

    const justifiedText = justifyText(text);
    res.type("text/plain").send(justifiedText) 
})

export default router;