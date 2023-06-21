import express from 'express';
import UserRouter from './Routers/UserRouter.js';
import bodyParser from 'body-parser';
const app=express();
const port=3000;

//UserRouter
app.use(bodyParser.json());
app.use('/', UserRouter);

app.get('/',(req,res)=>{
    res.send("Hello World")
})
//npm run dev
app.listen(port,()=>{
    console.log("well");
})