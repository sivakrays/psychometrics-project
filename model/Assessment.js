import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Assessment = sequelize.define("Assessment", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  question: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Assessment;
