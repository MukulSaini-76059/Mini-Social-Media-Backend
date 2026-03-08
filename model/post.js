const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"userSchema"
    },
    date:{
        type:Date,
        default:Date.now
    },
    content:String,
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"userSchema"

    }]
})

module.exports = mongoose.model("postSchema", postSchema)