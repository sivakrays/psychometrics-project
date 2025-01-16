import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Assessment from "./Assessment.js";
import Option from "./Option.js";

const QuestionOption = sequelize.define("QuestionOption", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

Assessment.belongsToMany(Option, { through: QuestionOption });
Option.belongsToMany(Assessment, { through: QuestionOption });

export default QuestionOption;
