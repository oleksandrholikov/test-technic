import express from "express";

const PORT = 3000;
const app = express();
app.use(express.json());
app.use(express.text({type: 'text/plain'}));

app.listen(PORT, ()=>console.log(`Listening on port ${PORT}`))