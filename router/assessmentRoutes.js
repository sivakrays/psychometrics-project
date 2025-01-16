import express from "express";
import {
  getAllAssessment,
  saveAssessments,
} from "../controller/AssessmentController.js";
import { authenticateToken } from "../middleware/authMiddleware.js";
const assessmentRouter = express.Router();

assessmentRouter.get("/getAssessments", authenticateToken, getAllAssessment);

assessmentRouter.post(
  "/saveAllAssessments",
  authenticateToken,
  saveAssessments
);

export default assessmentRouter;
