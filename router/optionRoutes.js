import express from "express";
import { saveOptionList } from "../controller/OptionController.js";

const router = express.Router();

router.post("/saveOptions", saveOptionList);

export default router;
