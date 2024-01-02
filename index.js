var colors = require('colors');
const express = require("express")
require('./config')
const item = require('./items')

const app = express();

app.use(express.json())
app.post("/create",(req,res)=>{
    console.log(req.body);
    res.send("done")
})
app.listen(5000)


console.log("here is the backend technology".underline.italic.bgYellow)