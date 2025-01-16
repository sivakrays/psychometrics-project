import express from "express";
import optionRoutes from "./optionRoutes.js";
import assessmentRoutes from "./assessmentRoutes.js";
import userRoutes from "./userRoutes.js";
const router = express.Router();

router.use("/api", optionRoutes);
router.use("/api", assessmentRoutes);
router.use("/api", userRoutes);

export default router;
