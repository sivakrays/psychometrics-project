import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Teacher = sequelize.define("Teacher", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
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
  dob: { type: DataTypes.DATE, allowNull: false },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: { isEmail: true },
  },
  gender: {
    type: DataTypes.ENUM,
    values: ["M", "F", "O", "NA"],
    allowNull: false,
  },
  password: { type: DataTypes.STRING, allowNull: false },
  phone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  languageKnown: { type: DataTypes.STRING, allowNull: false },
  subjects: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
  },
  qualifications: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    enum: ["admin", "manager", "teacher", "student", "parent"],
    defaultValue: "teacher",
  },
});

export default Teacher;
