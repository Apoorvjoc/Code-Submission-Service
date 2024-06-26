const dotenv = require("dotenv");

dotenv.config()

module.exports = {
   PORT: process.env.PORT || 3002,
   REDIS_PORT : Number(process.env.REDIS_PORT) || 6379,
   REDIS_HOST : process.env.REDIS_HOST || '127.0.0.1',
   ATLAS_DB_URL : process.env.ATLAS_DB_URL
}