const Patient = require('../models/patient');
const Report = require('../models/report');

//creating report for patient
module.exports.createReport = async function(req,res){
    try{
        let patient  = await Patient.findOne({phoneNumber:req.body.phoneNumber});
        if(!patient){
            patient = await Patient.create({
                name:req.body.name,
                phoneNumber: req.body.phoneNumber
            });
        }
        return res.status(200).json({
            message:"patient successfully registered",
            patient:patient
        });
    }
    catch(err) {
        return res.status(401).json({
            message:"Internal Server Error"
        })
    }
}

//Fetching all reports of Patient

module.exports.allReports = async function(req,res){
    try{
        let pat_id = req.params.id;
        let patient = Patient.findById(pat_id);
        let reports = await Report.find({ patient: pat_id});
        console.log(reports);
       if(reports){ 
          return res.status(200).json({
              message:"reports of patient",
              reports:reports
          })
        }
        else{
            return res.status(200).json({
                message:"no reports recreated yet",
                reports:reports
            })
        } 
    }
    catch(err){
       return res.status(401).json({
        message:"Internal Server Error",
        reports:[]
       })
    }
}