import express from "express";
import {
  userLogin,
  userRegistration,
  googleLogin,
  googleCallback,
} from "../controller/userController.js";
import { authenticateToken } from "../middleware/authMiddleware.js";
import passport from "passport";

const userRoutes = express.Router();

userRoutes.post("/userRegistration", userRegistration);
userRoutes.post("/userLogin", userLogin);
userRoutes.get(
  "/googleLogin",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

userRoutes.get("/login/failed", (req, res) => {
  res.status(401).json({
    status: false,
    message: failure,
  });
});

userRoutes.get(
  "auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "https://psychometrics.onrender.com/",
    failureRedirect: "/login/failed",
  })
);

userRoutes.get("/googlePage", googleLogin);

export default userRoutes;
