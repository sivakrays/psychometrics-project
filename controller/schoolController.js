import School from "../model/School.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/jwtToken.js";

export const schoolRegistration = async (req, res) => {
  const school = req.body;
  try {
    if (school == null) {
      return res.status(400).json({ message: "data is empty" });
    }
    school.password = await bcrypt.hash(school.password, 10);
    const savedSchool = await School.create(school);
    const { password, ...schoolWithoutPassword } = savedSchool.dataValues;

    res.status(200).json({
      message: "school registration completed successfully",
      data: schoolWithoutPassword,
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: error.message, message: "registration failed" });
  }
};
export const schoolLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const school = await School.findOne({ where: { email } });
    if (!school || !(await bcrypt.compare(password, school.password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = generateToken(school);
    res.status(200).json({
      message: "Login successful.",
      status: true,
      data: {
        userId: school.id,
        token: token,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
