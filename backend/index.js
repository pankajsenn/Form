const mongoose = require("mongoose");
const express= require('express');
const cors = require('cors');
const Info = require('./model/info')
async function mongocon(){
    try{
        await mongoose.connect(`mongodb://localhost/onito`);
        console.log("mongo connected successfully")
    }
    catch(e){
       console.log(e);
    }
}
mongocon();
const app = express();
app.use(cors());
app.use(express.json());
 
app.get("/get/info",async(req,res)=>{
    try{
    const info = await Info.find();
    res.status(200).json({
        status:"success",
        info
    })
    }
    catch(e){
        res.status(500).json({
            status:"failure",
            message:  e.message
        })
    }
})
app.post("/post/info",async(req,res)=>{
    try{
        const  data = req.body.data;
        console.log(data)
        const userdetail=  await Info.create(data);
        res.status(200).json({
         status:"success",
         userdetail
        })
    }
    catch(e){
        res.status(500).json({
            status:"failed",
            message:e.message
        })
    }

})


app.listen(3001,()=>{console.log(`server is up at port 3001`)});
