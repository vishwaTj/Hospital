const Patient = require('../models/Patient');

const Report = require('../models/Report');


// Creting a report for patient
module.exports.createReport =async function(req,res){
    try{
        let patient = await Patient.findById(req.params.id);
        let reports = await Report.create({status : req.body.status , date : `${new Date(Date.now()).toLocaleDateString().toString()}` , patient : req.params.id});
        await patient.report.push(reports);
        //report reference added to the patient's database
        await patient.save();
        return res.status(200).json({
            message : "Report Generated Successfully"
        });
    }
    catch(err){
        res.status(500).json({
            message : err
        });
    }
}

// fetching all reports of a patient
module.exports.allReports = async function(req,res){
    try{
        let patient = await Patient.findById(req.params.id).populate('report').exec();
        return res.status(200).json({
            message : "All reports generated till date for the user",
            data : patient.report,
        })
    }
    catch(err){
        return res.status(500).json({
            message: err
        });
    }
}

// fetching all reports status vise
module.exports.statusVise = async function(req,res){
    try{
        console.log(req.params.status);
        let reports = await Report.find({ status: req.params.status }).populate('patient').exec();
        console.log(reports);
        return res.status(200).json({
            message : "All reports with respective to the status generated",
            data : reports
        });
    }
    catch(err){
        return res.status(500).json({
            message: err
        });
    }
}
