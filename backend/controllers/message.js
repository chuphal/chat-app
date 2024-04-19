import Conversation from "../models/Conversation.js";
import Message from "../models/Message.js";

export const sendMessage = async (req, res) => {
    try {
        const {message} = req.body;
        const {id: receiverId} = req.params;
        const senderId = req.user._id;

        // previous all conversation b/w theses two..
        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId]}
        });

        // first time conversation.
        if (!conversation) {
            // create the conversation.
            conversation = await Conversation.create({
                participants: [senderId, receiverId]
            });
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        });

        // append id to conversation message.
        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }

        // save to database
        // await conversation.save();
        // await newMessage.save();

        await Promise.all([conversation.save(), newMessage.save()]);

        res.status(201).json(newMessage);


    } catch (error) {
        console.log("Error in sendMessage controller", error.message);
        res.status(500).json({error: "Internal server error"});
    }

    
}

export const getMessages = async (req, res) => {
    try {
        const {id: userToChatid} = req.params;
        const senderId = req.user._id;

        // conversation b/w two..
        const conversation = await Conversation.findOne({
            participants: { $all : [senderId, userToChatid]}
        }).populate("messages") ; // not reference but actual messages.
        
        if (!conversation) {
            return res.status(200).json([]);
        }

        res.status(200).json(conversation.messages);

    } catch (error) {
        console.log("Error in getMessages controller", error.message);
        res.status(500).json({error: "Internal server error"});
    }
}