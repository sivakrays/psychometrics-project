import express from "express";
import {
  schoolRegistration,
  schoolLogin,
} from "../controller/schoolController.js";
import { authorizeRoles } from "../middleware/roleMiddleware.js";
import { authenticateToken } from "../middleware/authMiddleware.js";
const schoolRouter = express.Router();

schoolRouter.post(
  "/schoolRegistration",
  authenticateToken,
  authorizeRoles("admin", "manager"),
  schoolRegistration
);
schoolRouter.post("/schoolLogin", schoolLogin);

export default schoolRouter;
