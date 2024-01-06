import express from "express";
import { RegisterUser } from "../Controller/User.js";
const router = express.Router();

router.post("/register", RegisterUser);
export default router;
