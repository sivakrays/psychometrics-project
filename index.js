import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./config/db.js";
import autoCreate from "./config/tableCreationConfig.js";
import router from "./router/router.js";

// to use  .env file atributes
dotenv.config();

const app = express();

// to convert the http request body to json type or as object
app.use(express.json({ extends: false }));

app.use(
  cors({
    origin: ["http://localhost:5173","https://psychometrics.onrender.com"],
  })
);

autoCreate();

app.use(router);

// PORT connection from .env file
app.listen(process.env.SERVER_PORT, () => {
  console.log("Server running on PORT " + process.env.SERVER_PORT);
});
