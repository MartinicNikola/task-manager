const mongoose = require('mongoose')

const TaskSchema = mongoose.Schema({
    userId: String,
    Task:{
        id: String,
        description: String
    }
})

module.exports = mongoose.model('UserTask',UserTask)