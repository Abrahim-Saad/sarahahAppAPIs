const messageCollection = require('../models/messageModel')


module.exports.sendMessage = async (request, response) => {
    try {
        const { messageContent } = request.body
        await messageCollection.insertMany(
            {
                messageContent: messageContent,
                targetUserID: request.userID,
            });
        response.json({ message: "Message Has Been Sent Successfully!!" })

    } catch (error) {
        response.json({ error })

    }


}









