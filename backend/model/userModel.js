const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    userName:String,
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model('UserSchema',UserSchema)