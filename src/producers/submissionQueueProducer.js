const submissionQueue = require("../queues/submissionQueue.js");

module.exports = async function (payload) {
    await submissionQueue.add('SubmissionJob' , payload) // producer is adding object in queue as => jobname (which is class name for this example 'SampleJob') and payload as data =>  {name : Apoorv, location : Nainital }
    console.log("Successfully added new submission job");
}