import express from "express";
import {
  getAllAssessment,
  saveAssessments,
  getResults,
} from "../controller/assessmentController.js";
import { authenticateToken } from "../middleware/authMiddleware.js";
const assessmentRouter = express.Router();

assessmentRouter.get("/getAssessments", authenticateToken, getAllAssessment);

assessmentRouter.post(
  "/saveAllAssessments",
  authenticateToken,
  saveAssessments
);
assessmentRouter.post("/getResults", authenticateToken, getResults);

export default assessmentRouter;
