import express from "express";
import optionRoutes from "./assessmentRoutes.js";
const router = express.Router();

router.use(optionRoutes);

export default router;
