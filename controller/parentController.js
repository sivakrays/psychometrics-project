import Parent from "../model/Parent.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/jwtToken.js";
export const parentRegistration = async (req, res) => {
  const parent = req.body;
  try {
    if (!parent) {
      return res.status(400).json({ message: "data is empty" });
    }
    parent.password = await bcrypt.hash(parent.password, 10);
    const savedParent = await Parent.create(parent);
    const { password, ...parentWithoutPassword } = savedParent.dataValues;

    res.status(200).json({
      message: "Student registration completed successfully",
      data: parentWithoutPassword,
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: error.message, message: "registration failed" });
  }
};

export const parentLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const parent = await Parent.findOne({ where: { email } });
    if (!parent || !(await bcrypt.compare(password, parent.password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = generateToken(parent);
    res.status(200).json({
      message: "Login successful.",
      status: true,
      data: {
        userId: parent.id,
        token: token,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
