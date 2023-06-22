import express from 'express';
import bodyParser from 'body-parser';

import UserRouter from './Routers/UserRouter.js';

const app=express();
const port=3000;

app.use(bodyParser.json());
app.use('/UserRouter', UserRouter);

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.listen(port,()=>{
    console.log("well");
})