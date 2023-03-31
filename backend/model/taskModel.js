const mongoose = require('mongoose')

const TaskSchema = mongoose.Schema({
    userId: String,
    id: String,
    setToDone: {type:Boolean, default: false},
    heading: {type:String, required:true},
    description: {type:String, required:true},
    dueTo: Date,
    place: String

})

module.exports = mongoose.model('UserTask',TaskSchema)