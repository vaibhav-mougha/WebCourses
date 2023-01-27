const express=require("express")
const { ReactModel}=require("../Models/ReactSchema")

const ReactRouter=express.Router()


ReactRouter.get("/",(req,res)=>{
    
    try{


    res.send("All data")
    console.log(data)

    }
    catch(err){
res.end("something went wrong")
    }
})

ReactRouter.post("/add", async(req,res)=>{
    let data=req.body
    try{
        const savedata= new ReactModel(data)
        await savedata.save()
        res.send(data)
        }
        catch(err){
    res.end("something went wrong")
        }
})

module.exports={
    ReactRouter
}