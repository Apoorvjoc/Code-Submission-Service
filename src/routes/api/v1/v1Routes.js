async function v1plugin(fastify , options) {
    fastify.register(require('./test/testRoutes.js') , {prefix: '/test'})
    fastify.register(require('./submission/submissionRoute.js') , {prefix: '/submission'})
}

module.exports = v1plugin