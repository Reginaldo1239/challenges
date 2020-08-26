require('dotenv').config()

module.exports={
    HOST_DB:process.env.HOST_DB,
    DB_NAME:process.env.DB_NAME,
    DB_USER_NAME:process.env.DB_USER_NAME,
    DB_USER_PASSWORD:process.env.DB_USER_PASSWORD,
}