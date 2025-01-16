import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Option = sequelize.define("Option", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  option_text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

export default Option;
