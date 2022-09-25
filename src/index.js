const express=require("express")
const app=express()
const cors=require("cors")
app.use(cors())

const CityController=require("./Controllers/cityContorllers")

app.use(express.json()) 


app.use("/city",CityController)
module.exports=app 
