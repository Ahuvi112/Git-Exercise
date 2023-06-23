const express = require('express');
const bodyParser = require('body-parser');
const UserRouter = require('./Routers/UserRouter.js');

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