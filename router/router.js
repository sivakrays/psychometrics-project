import express from "express";
import optionRoutes from "./optionRoutes.js";
import assessmentRoutes from "./assessmentRoutes.js";
import userRoutes from "./userRoutes.js";
import schoolRouter from "./schoolRoutes.js";
import teacherRouter from "./teacherRoutes.js";
import parentRouter from "./parentRoutes.js";
import studentRouter from "./studentRoutes.js";
const router = express.Router();

router.use("/api", optionRoutes);
router.use("/api", assessmentRoutes);
router.use("/api", userRoutes);
router.use("/api/admin", schoolRouter);
router.use("/api/admin", teacherRouter);
router.use("/api/admin", parentRouter);
router.use("/api/admin", studentRouter);

export default router;
