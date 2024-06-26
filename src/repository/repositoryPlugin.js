const SubmissionRepo = require('./submissionRepo')
const fastifyPlugin = require('fastify-plugin')

async function repositoryPlugin(fastify , option){
    fastify.decorate('SubmissionRepo' , new SubmissionRepo()) // decorator use to add key value pair 
}

module.exports = fastifyPlugin(repositoryPlugin)
