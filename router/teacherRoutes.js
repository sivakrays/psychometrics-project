import express from "express";
import {
  teacherRegistration,
  teacherLogin,
} from "../controller/teacherController.js";
import { authorizeRoles } from "../middleware/roleMiddleware.js";
import { authenticateToken } from "../middleware/authMiddleware.js";
const teacherRouter = express.Router();

teacherRouter.post(
  "/teacherRegistration",
  authenticateToken,
  authorizeRoles("admin"),
  teacherRegistration
);
teacherRouter.post("/teacherLogin", teacherLogin);

export default teacherRouter;
