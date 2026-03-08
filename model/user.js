const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:String,
    email:String,
    name:String,
    age:Number,
    password:String,
    profilePic:{
        type:String,
        default:"images.png"
    },
    posts:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"postSchema"

        }
    ]
})

module.exports = mongoose.model("userSchema", userSchema);