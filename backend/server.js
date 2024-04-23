import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();

// import files
import authRouter from "./routes/auth.js";
import connectDB from "./db/connect.js";
import messageRouter from "./routes/message.js";
import userRouter from "./routes/user.js";

// app.get("/", (req,res) => {
// //     res.send("Hello, world");
// // });

// middlewares
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/messages", messageRouter);
app.use("/api/v1/users", userRouter);

const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
