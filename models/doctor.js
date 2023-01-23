const mongoose = require('mongoose');

const DoctorSchema  = mongoose.Schema({
    email: {
        type : String,
        required : true,
    },
    password : {
        type : String ,
        required : true,
    },
    name : {
        type : String,
        required : true,
    }
});

const Doctor = mongoose.model('DoctorDetails',DoctorSchema);


module.exports = Doctor;