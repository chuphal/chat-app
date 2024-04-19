import express from "express";
import authentication from "../middlewares/authentication.js";
import { getUsersForSidebar } from "../controllers/user.js";

const router = express.Router();

router.get("/", authentication ,getUsersForSidebar);

export default router;