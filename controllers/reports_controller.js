const Patient = require('../models/patient');
const Report = require('../models/report');

//create new report
module.exports.create = async function(req,res){
  try{
    // console.log(req.body);
    let pat_id = req.params.id;
    console.log(req.params.id);
    let patient = Patient.findById(pat_id);
    console.log(patient);
    let report = await Report.create({
        status : req.body.status,
        patient: pat_id
    })
    return res.status(200).json({
        message:"Report created!"
    });
  }catch(err){
    console.log(err);
    return res.status(401).json({
        message:"Error"
    })
  }
}  