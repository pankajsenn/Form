const mongoose = require("mongoose")

const infoschema = mongoose.Schema({
        name:String,
        Dob: String,
        sex: String,
        mobile:Number,
        govtway: String,
        govtid: String,
        guardian: String,
        guardianname: String,
        email:String,
        emergencyno: Number,
        address: String,
        state: String,
        city:String,
        country: String,
        pincode: Number,
        occupation: String,
        religion: String,
        marital: String,
        bloodgroup: String,
        nationality: String
});

const Info= mongoose.model("Info",infoschema);
module.exports = Info;