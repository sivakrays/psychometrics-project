import Assessment from "../model/Assessment.js";
import Option from "../model/Option.js";
import QuestionOption from "../model/QuestionOption.js";
import sequelize from "./db.js";

const autoCreate = async () => {
  try {
    // Synchronize models with the database
    await sequelize.sync({ force: false }); // Set to true to drop tables and recreate them
    console.log("Database synchronized");
  } catch (error) {
    console.error("Error synchronizing the database:", error);
  }
};

export default autoCreate;
