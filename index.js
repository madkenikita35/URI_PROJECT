import express from "express";
import mongoose from "mongoose";
import dotevn from "dotenv";

const app = express();
dotevn.config();

app.use(express.json());

const PORT = process.env.PORT || 5000;
const uri = process.env.MONGO_URI;

mongoose.connect(uri).then(() => {
  console.log("Mongodb Connected");
});
