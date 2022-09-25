const express =require("express")
const City=require("../Model/citymodel")

const router=express.Router()

router.get("", async (req, res) => {
    try {
      const city = await City.find().lean().exec();
      return res.status(200).send(city); 
    } catch (err) {
      return res
        .status(500)
        .send({ message:err.message });
    }
  });
    router.post("", async (req, res) => {
    try {
      const city = await City.create(req.body);
      return res.status(201).send(city );
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  

module.exports=router