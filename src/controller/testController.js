async function testController(req , res){
    res.status(200).send({data:'pong'})
}

module.exports = {
    testController,
}