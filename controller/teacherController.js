import { where } from "sequelize";
import Teacher from "../model/Teacher.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/jwtToken.js";
export const teacherRegistration = async (req, res) => {
  const teacher = req.body;
  try {
    if (!teacher) {
      return res.status(400).json({ message: "data is empty" });
    }

    teacher.password = await bcrypt.hash(teacher.password, 10);

    const savedTeacher = await Teacher.create(teacher);
    const { password, ...teacherWithoutPassword } = savedTeacher.dataValues;

    res.status(200).json({
      message: "Teacher registration completed successfully",
      data: teacherWithoutPassword,
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: error.message, message: "registration failed" });
  }
};

export const teacherLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const teacher = await Teacher.findOne({ where: { email } });
    if (!teacher || !(await bcrypt.compare(password, teacher.password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = generateToken(teacher);
    res.status(200).json({
      message: "Login successful.",
      status: true,
      data: {
        userId: teacher.id,
        token: token,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
