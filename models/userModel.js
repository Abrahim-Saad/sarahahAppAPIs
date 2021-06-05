const mongoose = require('mongoose')

userSchema = mongoose.Schema({

    userName: {
        type: String,
        required: true,
    },
    
    userEmail: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },

    userPassword: {
        type: String,
        required: true,

    },

    userPicture: {
        type: String,
        required: false,
    }

})

const userModel = mongoose.model('user', userSchema)

module.exports = userModel