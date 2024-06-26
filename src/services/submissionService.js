const submissionProducer = require('../producers/submissionQueueProducer')

class SubmissionService {
    constructor(SubmissionRepo){
        //add dependency injection if needed
        this.SubmissionRepo = SubmissionRepo;
    }

    async addSubmission(submissionObj){
        const submission = this.SubmissionRepo.createSubmission(submissionObj) // added to db

        if(!submission){
            //TODO : Error Handling
            throw {message : "not able to create submission"}
        }
        console.log("Successfully added submission"+submissionObj);
        const response = await submissionProducer(submissionObj); // added to queue
        return {queueResponse:response , submission};
    }
}

module.exports = SubmissionService;