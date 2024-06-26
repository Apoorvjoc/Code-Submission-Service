const Submission = require("../models/submissionModel")

class SubmissionRepo {
    constructor(){
        this.submissionModel = Submission
    }

    async createSubmission(submission){
        const response = await this.submissionModel.create(submission);
        return response;
    }
}

module.exports = SubmissionRepo