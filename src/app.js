require('dotenv').config()
const express = require("express");
const app = express();
const port = process.env.PORT || 3200;

app.get("/",async(req,res)=>{
    res.send("<h1> Welcome to home page</h1>")
})

app.listen(port, (req,res)=>{
    console.log(`running on the port ${port}`)
})
