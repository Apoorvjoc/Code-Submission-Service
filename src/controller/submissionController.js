async function testController(req , res){
    res.status(200).send({data:'pong'})
}


// TODO : add validation layer
async function createSubmission(req , res){
    const response = await this.SubmissionService.addSubmission(req.body) 
    return res.status(201).send({
        error:{},
        data: response,
        success: true,
        message: "Created submission successfully"
    })
}

module.exports = {
    testController,
    createSubmission
}