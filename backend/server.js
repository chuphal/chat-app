import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";

dotenv.config();
import { app, server } from "./socket/socket.js";

// security package..
import helmet from "helmet";
import cors from "cors";
import xss from "xss-clean";

// import files
import authRouter from "./routes/auth.js";
import connectDB from "./db/connect.js";
import messageRouter from "./routes/message.js";
import userRouter from "./routes/user.js";

const __dirname = path.resolve();

// app.get("/", (req,res) => {
// //     res.send("Hello, world");
// // });

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(cors());
app.use(xss());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/messages", messageRouter);
app.use("/api/v1/users", userRouter);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

// for running both frontend and back end on same server..
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    server.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
