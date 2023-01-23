const mongoose = require('mongoose');

const PatientSchema = mongoose.Schema({
    PhoneNo : {
        type : String,
        required : true,
    },
    report: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Report',
        }
    ],
    doctor : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Doctor'
    },
    name : {
        type: String,
        required: true,
    }
});

const Patient = mongoose.model('Patient',PatientSchema);


module.exports = Patient;