const { ConversationModel } = require("../Modal/Conversation");
const { MessageModel } = require("../Modal/Message");

// status code 500 means internal sever error
const newMessage = async (req, res) => {
  try {
    const newMessage = new MessageModel(req.body);
    await newMessage.save();
    await ConversationModel.findByIdAndUpdate(req.body.conversationId, {
      message: req.body.text,
    });
    res.status(200).json("Message has been sent successfully");
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getMessages = async (req, res) => {
  try {
    const messages = await MessageModel.find({ conversationId: req.params.id });
    res.status(200).json(messages);
  } catch (e) {
    res.send(500).json(error.message);
  }
};

module.exports = {
  newMessage,
  getMessages,
};
