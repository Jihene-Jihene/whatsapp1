import mongoose from "mongoose";

const ConversationSchema = new mongoose.Schema(
  {
    members: {
      type: Array,
    },
    message: {
      type: String,
    },
  },
  {
    timeStamps: true,
  }
);

const ConversationModel = mongoose.model("Conversation", ConversationSchema);

export { ConversationModel };
