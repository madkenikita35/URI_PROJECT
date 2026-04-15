import express from "express";
const router = express.Router();
import { handleSignup } from "../controller/user.js";

router.post("/", handleSignup);

export default router;
