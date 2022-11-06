const mongoose = require ("mongoose");
require ("dotenv").config()

const MONGO_DB_URL_CONNECTION = process.env.MONGO_DB_URL_CONNECTION

function connectToMongoDb(){
    mongoose.connect(MONGO_DB_URL_CONNECTION)

    mongoose.connection.on ("connected", () =>{
        console.log ("connection to MongoDB successful ")

    })

    mongoose.connection.on ("error", (err) =>{
        console.log(err)
        console.log ("connection to MongoDB not successful ")

    })
}

module.exports = {connectToMongoDb}