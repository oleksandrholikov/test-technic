import express from "express";
import justifyRouter from "./routes/justify.js"

const PORT = 3000;
const app = express();
app.use(express.json());
app.use(express.text({type: 'text/plain'}));

app.use("/api/justify", justifyRouter)

app.listen(PORT, ()=>console.log(`Listening on port ${PORT}`))