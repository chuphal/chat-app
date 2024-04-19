import express from "express";
import { sendMessage, getMessages } from "../controllers/message.js";
import authentication from "../middlewares/authentication.js";

const router = express.Router();

router.get("/:id", authentication, getMessages)
router.post("/send/:id", authentication, sendMessage);

export default router;