const BaseError = require("../errors/BaseError");
const { StatusCodes } = require('http-status-codes')

function errorHandler(err , req , res  , next) {
    if(err instanceof BaseError){
        return res.status(err.statusCode).send({
            success:false,
            message: err.message,
            error: err.details,
            data:{}
        })
    }

    // if not base error
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
        success:false,
        message: "Something Went Wrong",
        error: err,
        data:{}
    })
}

module.exports = errorHandler;