const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    pasword:{
        type:String,
        required:true
    },
   },
   {
    timestamps:true
   }

);
const Doctor = mongoose.modle('Doctor',doctorSchema);
module.exports = Doctor;