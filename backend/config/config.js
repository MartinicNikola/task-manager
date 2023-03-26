const mongoose = require('mongoose')

const connectToDB = async () => {
    try{
        const conn = await mongoose.connect('mongodb+srv://martinicnikola00:Borussia1909@cluster0.pnd8ddj.mongodb.net/Database1')
        console.log(`Mongo connected on host: ${conn.connection.host}`)
    }
    catch(err){
        console.error(err)
    }
}

const Schema = mongoose.Schema({
    userName:String,
    email:String,
    password:String
})

module.exports = connectToDB