import express from "express";
import { userLogin, userRegistration } from "../controller/userController.js";
import { authenticateToken } from "../middleware/authMiddleware.js";

const userRoutes = express.Router();

userRoutes.post("/userRegistration", userRegistration);
userRoutes.post("/userLogin", userLogin);

export default userRoutes;
