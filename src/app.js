import express from "express";
const app = express()
import user from "./dados.js";
app.use(express.json())




app.get('/',(req, res)=>{
    res.status(200).json(user);
})

app.post('/', (req,res)=> {
    user.push(req.body);
    res.status(201).send("User criado")
})

export default app;

