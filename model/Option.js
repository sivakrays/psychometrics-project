import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Option = sequelize.define("Option", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  option: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  points: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Option;
