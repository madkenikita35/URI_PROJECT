import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./route/User.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use("/users", userRoute);

const PORT = process.env.PORT || 5000;
const uri = process.env.MONGO_URI;

mongoose.connect(uri).then(() => {
  console.log("Mongodb Connected");
});

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(PORT, () => {
  console.log(`Server is Running on the Port ${PORT}`);
});
