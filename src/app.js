require('dotenv').config();
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3200;

const templatePath = path.join(__dirname,"..","templates","views");
app.set("view engine","ejs");
app.set("views",templatePath);

app.get("/",async(req,res)=>{
    res.render("index")
})

app.listen(port, (req,res)=>{
    console.log(`running on the port ${port}`);
})
