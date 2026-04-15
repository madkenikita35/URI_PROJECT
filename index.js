import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;
const uri = process.env.MONGO_URI;

// const PORT = 5000;
// const uri =
//   "mongodb+srv://madkenikita35_db_user:Nikita@url.6ufirbp.mongodb.net/?appName=URL";

mongoose.connect(uri).then(() => {
  console.log("Mongodb Connected");
});

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(PORT, () => {
  console.log(`Server is Running on the Port ${PORT}`);
});
