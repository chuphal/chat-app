import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true 
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true 
    },
    message: {
        type: String,
        reqired: true
    }

}, {
    timestamps: true
});

// convert schema to model
const Message = mongoose.model("Message", messageSchema);

export default Message;