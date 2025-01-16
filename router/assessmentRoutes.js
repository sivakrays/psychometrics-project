import express from "express";
import {
  getAllAssessment,
  saveAssessments,
} from "../controller/AssessmentController.js";
const router = express.Router();

router.get("/getAssessments", getAllAssessment);

router.post("/saveAllAssessments", saveAssessments);

export default router;
