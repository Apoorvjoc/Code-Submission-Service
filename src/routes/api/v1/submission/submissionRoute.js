const { createSubmission } = require("../../../../controller/submissionController");
const { testController } = require("../../../../controller/testController");

async function submissionRoute(fastify , option){
    fastify.post("/ping" , createSubmission)
    fastify.get("/ping" , testController) //test
}

module.exports = submissionRoute;
