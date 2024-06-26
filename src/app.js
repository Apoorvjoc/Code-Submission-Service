const fastifyPlugin = require('fastify-plugin')
const repositoryPlugin = require("./repository/repositoryPlugin")
const servicePlugin = require("./services/servicePlugin")

async function app(fastify , options) {
    fastify.register(require('@fastify/cors'))

    fastify.register(repositoryPlugin)
    fastify.register(servicePlugin)

    //register test route
    fastify.register(require('./routes/api/apiRoutes') , {prefix:'/api'})

    //regisgter submission service
    // fastify.register(require('./routes/api/v1/v1Routes'))
    
}

module.exports = fastifyPlugin(app)

