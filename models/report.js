const mongoose = require('mongoose');


const ReportSchema = mongoose.Schema({
    status : {
        type : String,
        required : true,
    },
    patient : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
    }
});
//Created schema for report

const Report = mongoose.model('Report',ReportSchema);
//Named the collection as Report

module.exports = Report;