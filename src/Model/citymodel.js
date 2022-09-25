const mongoose=require("mongoose")

const CitySchema= new mongoose.Schema(
    {
      city: {type: String, required:true},
      state: {type: String, required:true}
     },
    {
      versionKey: false,
      timestamps: true, 
    }
  );

  const noticeData=mongoose.model("city", CitySchema)
  module.exports=noticeData