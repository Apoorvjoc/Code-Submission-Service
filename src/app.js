const fastifyPlugin = require('fastify-plugin')
const repositoryPlugin = require("./repository/repositoryPlugin")
const servicePlugin = require("./services/servicePlugin")

async function app(fastify , options) {
    await fastify.register(require('@fastify/cors'))

    await fastify.register(repositoryPlugin)
    await fastify.register(servicePlugin)

    //register test route
    await fastify.register(require('./routes/api/apiRoutes') , {prefix:'/api'})

    //regisgter submission service
    // fastify.register(require('./routes/api/v1/v1Routes'))
    
}

module.exports = fastifyPlugin(app)

