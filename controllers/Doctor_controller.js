const jwt = require('jsonwebtoken');

const Doctor = require('../models/Doctor');

// register a doctor
module.exports.registerDoctor = async function (req,res){
    try{
        let user = await Doctor.create(req.body);
        return res.status(200).json({
            message : "User Created"
        });
    }
    catch(err){
        console.log("Error while creating the user",err);
        return res.status(500).json({
            message : err
        });
    }
}

// login funciton for Doctor
module.exports.login = async function (req,res){
    try{
        let user = await Doctor.findOne({email : req.body.email , password : req.body.password});
        console.log(req.body+" "+user);
        if(user){
            return res.status(200).json({
                message : "Token Created Successfully",
                data : {
                    token: jwt.sign(user.toJSON(), 'EncryptionKey', { expiresIn: 100000000 }),
                    //Created the token to be provided to the user
                }
                
            });
        }
        return res.status(422).json({
            message: "Invalid UserName/Password"
        });
    }
    catch(err){
        return res.status(500).json({
            message : err
        });

    }
}

// validatin a request
module.exports.authFailed = function (req,res){
    return res.status(422).json({
        message: "Invalid UserName/Password"
    });
}