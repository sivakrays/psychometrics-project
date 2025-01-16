import express from "express";
import {
  saveOptionList,
  getAllOptions,
} from "../controller/OptionController.js";
import { authenticateToken } from "../middleware/authMiddleware.js";

const optionRouter = express.Router();

optionRouter.post("/saveOptions", authenticateToken, saveOptionList);

optionRouter.get("/getAllOptions", authenticateToken, getAllOptions);

export default optionRouter;
