const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    status:{
        type:String,
        required:true,
        enum:['Negative','Positive','Quarentine']
    },
    doctor:{
         type: mongoose.Schema.Types.ObjectId,
         ref: 'Doctor'
    }
  },{
    timestamps:true
  }
)

const Report = mongoose.model('Report', reportSchema);
module.exports = Report;