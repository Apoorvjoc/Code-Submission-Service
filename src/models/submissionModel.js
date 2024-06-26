const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema({
    userId : {
        type:String,
        required:[true , 'userId is mandatory field'],
    },
    problemId : {
        type:String,
        required:[true , 'problemId is mandatory field'],
    },
    code : {
        type:String,
        required:[true , 'code for submission is missing '],
    },
    language : {
        type:String,
        required:[true , 'language for submission is missing'],
    },
    status : {
        type : String ,
        enum : ["PENDING" , "TLE" , "MLE" , "WA" , "SUCCESS" , "RE"],
        default : "PENDING"
    }
})

const Submission = mongoose.model('submission' , submissionSchema);

module.exports = Submission;