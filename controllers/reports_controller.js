const Report = require('../models/report');

//create new report
module.exports.create = async function(req,res){
  try{
    let report = await Report.create({
        status : req.body.status,
        docotr:  req.query.docid
    })
    return res.staus(200).json({
        message:"Report created!",
        report:report
    });
  }catch(err){
    return res.status(401).json({
        message:"Error"
    })
  }
}  