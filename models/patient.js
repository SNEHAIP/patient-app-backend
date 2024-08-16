const mongoose= require("mongoose")
const patientSchema = mongoose.Schema(
    {
        patient_id:String,
        name:String,
        address:String,
        contact:String,
        emailid:String,
        password:String
    }
)
const patientModel = mongoose.model("patients",patientSchema)
module.exports=patientModel