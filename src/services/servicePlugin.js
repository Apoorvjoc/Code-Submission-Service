const SubmissionService = require('./submissionService')
const fastifyPlugin = require('fastify-plugin')

async function servicePlugin(fastify , option){
    fastify.decorate('SubmissionService' , new SubmissionService(this.SubmissionRepo))
}

module.exports = fastifyPlugin(servicePlugin)
