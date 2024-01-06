import express from "express";
import cors from "cors";
const app = express();
import User from "./Routes/User.js";
import connectDB from "./Config/db.js";
import dotenv from "dotenv";
dotenv.config();

connectDB();
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/user", User);

const PORT = process.env.PORT || 7000;
app.listen(PORT, async () => {
  console.log(`server is running on port ${PORT}`);
});
