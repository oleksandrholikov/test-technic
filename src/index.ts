import express from "express";
import justifyRouter from "./routes/justify.js"
import tokenRouter from "./routes/token.js"


const PORT = 3000;
const app = express();
app.use(express.json());
app.use(express.text({type: 'text/plain'}));

app.use("/api/justify", justifyRouter)
app.use("/api/token", tokenRouter)

app.listen(PORT, ()=>console.log(`Listening on port ${PORT}`))