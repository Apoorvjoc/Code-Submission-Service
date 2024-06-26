const BaseError = require("./BaseError");
const {StatusCodes} = require('http-status-codes');

class NotImplemented extends  BaseError{
    constructor(methodName){
        super("BadRequest" , StatusCodes.NOT_IMPLEMENTED , ` ${methodName} is not implemented` , {})
    }
}

module.exports = NotImplemented;