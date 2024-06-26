const mongoose = require("mongoose")
const {ATLAS_DB_URL} = require('../config/serverConfig')

async function connectToDB(){
    try {           
        await mongoose.connect(ATLAS_DB_URL)
        console.log("Connected to db");
    } catch (error) {
        console.log("FAiled to connect wit hDB");
        console.log(error);
    }
}

module.exports = connectToDB;