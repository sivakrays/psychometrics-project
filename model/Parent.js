import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Parent = sequelize.define("Parent", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { notEmpty: true },
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { notEmpty: true },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: { isEmail: true },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dob: { type: DataTypes.DATE, allowNull: false },

  phone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  relationship: {
    type: DataTypes.ENUM,
    values: ["Father", "Mother", "Guardian", "Other"],
    allowNull: false,
    // This restricts the relationship field to the defined values.
  },
  studentIds: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
    allowNull: true,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    enum: ["admin", "manager", "teacher", "student", "parent"],
    defaultValue: "parent",
  },
});

export default Parent;
