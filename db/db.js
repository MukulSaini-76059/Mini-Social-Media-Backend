const mongoose = require("mongoose");

async function connectDB (){
    await mongoose.connect(process.env.MONGODB)
       try{
        await mongoose.connect(process.env.MONGODB);
        console.log("MongoDB Connected");
    }
    catch(err){
        console.log("MongoDB Connection Error:", err);
    }
}
module.exports = connectDB;