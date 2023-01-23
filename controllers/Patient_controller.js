const Patient = require('../models/Patient');

// controller added to register a patient
module.exports.patientRegister = async function(req,res){
    try{
        let verify = await Patient.findOne({PhoneNo : req.body.PhoneNo}).populate('doctor').exec();
        if(verify){
            return res.status(409).json({
                message: "The submit phone number already exists",
                data : verify,
            });
            //If the phoneNo already exists
        }
        let user = await Patient.create({PhoneNo : req.body.PhoneNo , name : req.body.name , doctor : req.user._id});
        return res.status(200).json({
            message: "User Created",
            data : {
                patientId : user._id
            }
        });
    }
    catch(err){
        return res.status(500).json({
            message: err
        });
    }
}