const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false);

messageSchema = mongoose.Schema({    

    messageContent: {
        type: String,
        required: true,
    },

    targetUserID: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    
})

const messageModel = mongoose.model('message', messageSchema)

module.exports = messageModel