const app = require('./app')
const connectToDB = require('./config/dbConfig')
const serverConfig =  require('./config/serverConfig')

const fastify = require('fastify')({logger:true}) // calling fastify constructor

fastify.register(app)

fastify.listen({port:serverConfig.PORT} , (err)=>{
    if(err){
        fastify.log.error(err)
        process.exit(1)
    }
    connectToDB()
    console.log("Server up at port " , serverConfig.PORT);
} ) 