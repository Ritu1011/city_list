const mongoose=require("mongoose")

module.exports=()=>{
    return mongoose.connect(
      "mongodb+srv://Ritu1011:Mern1234@cluster0.cvgw1.mongodb.net/cityList"
    ).then(()=>{
        console.log("Database connected successuly");
        }).catch((err)=>{
            console.log(err);
       })
  };