const SubmissionCreationError = require('../errors/SubmissionCreationError');
const submissionProducer = require('../producers/submissionQueueProducer')

class SubmissionService {
    constructor(SubmissionRepo){
        //add dependency injection if needed
        console.log("Submission repo " , SubmissionRepo);
        this.SubmissionRepo = SubmissionRepo;
    }

    async addSubmission(submissionObj){
        const submission = await this.SubmissionRepo.createSubmission(submissionObj) // added to db

        if(!submission){
            throw new SubmissionCreationError("Failed to create entry in DB.");
        }
        console.log("Successfully added submission"+submissionObj);
        const response = await submissionProducer(submissionObj); // added to queue
        return {queueResponse:response ,submissionObj};
    }
}

module.exports = SubmissionService;