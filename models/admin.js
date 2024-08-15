const mongoose = require("mongoose")
const loginSchema = mongoose.Schema(
    {
        username:String,
        password:String
    }
)
const LoginModel = mongoose.model("logindata",loginSchema)
module.exports=LoginModel