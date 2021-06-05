const messageCollection = require('../models/messageModel')

module.exports.homePage = async (request, response) => {
    try {
        let pageNumber = request.query.page
        if (pageNumber == undefined || pageNumber <= 0) {
            pageNumber = 1
        }
        let numberOfMessages = 5
        let numberOfSkippedMessages = [pageNumber - 1] * numberOfMessages
        let userMessages = await messageCollection.find({ targetUserID: request.userID }).skip(numberOfSkippedMessages).limit(numberOfMessages);

        response.json({ pageNumber, userMessages })

    } catch (error) {
        response.json({ error })
    }


}
