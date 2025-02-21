import express from "express";
import {
  parentRegistration,
  parentLogin,
} from "../controller/parentController.js";
import { authorizeRoles } from "../middleware/roleMiddleware.js";
import { authenticateToken } from "../middleware/authMiddleware.js";
const parentRouter = express.Router();

parentRouter.post(
  "/parentRegistration",
  authenticateToken,
  authorizeRoles("admin", "manager"),
  parentRegistration
);
parentRouter.post("/parentLogin", parentLogin);

export default parentRouter;
