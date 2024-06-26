const { testController } = require("../../../../controller/testController");

async function testRoute(fastify , option){
    fastify.get("/ping" , testController)
}
module.exports = testRoute;
