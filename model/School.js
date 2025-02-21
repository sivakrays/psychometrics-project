import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
const School = sequelize.define("School", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },

  registerNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: "Unique registration number for the school",
  },
  // Name of the school
  schoolName: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: "Name of the school",
  },
  // Number of students enrolled
  noOfStudents: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    comment: "Total number of students",
  },
  // Name of the principal
  principalName: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: "Name of the principal",
  },
  // Contact number for the school or principal
  contactNo: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: "Contact number",
  },
  // Email address (must be unique)
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: { isEmail: true },
    comment: "Email address",
  },
  // Username for login
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: "Username for the school account",
  },
  // Password (should be stored as a hashed value in production)
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: "Hashed password",
  },
  // School address (could also be stored as JSON if you want to break it down further)
  address: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: "School address",
  },
});

export default School;
