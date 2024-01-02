var colors = require('colors');
const express = require("express")
require('./config')
const item = require('./items')

const app = express();

app.use(express.json())
// ***********post api*************
app.post("/create", async (req,res)=>{
    let data = new item(req.body)
    let result = await data.save()
    console.log(result);
    res.send("done")
})
// ***********get api******************
app.get("/list",async(req,res)=>{
    let data =await item.find()
    res.send(data)
    console.log(data);

})
// ******************delete api*********************
app.delete("/delete/:_id",async(req,res)=>{
    let data = await item.deleteOne(req.params)
    res.send(data)
    console.log(req.params);

})
// ******************put api *******************
app.put("/update/:_id", async (req, res) => {
    console.log(req.params);
    let data = await item.updateOne(
        req.params,
        {
            $set: req.body
        }
    );
    res.send(data);
});


app.listen(5000)


// console.log("here is the backend technology".underline.italic.bgYellow)