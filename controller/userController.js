import sequelize from "../config/db.js";
import User from "../model/User.js";
import { validateEmail } from "../utils/commonUtils.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/jwtToken.js";

export const userRegistration = async (req, res) => {
  try {
    const user = req.body;
    console.log(user);
    if (!user || !user.email || !user.password) {
      return res.status(400).json({
        message: "email or password missing",
      });
    }

    if (!validateEmail(user.email)) {
      return res.status(400).json({
        message: "invalid email",
      });
    }

    const hashedPassword = await bcrypt.hash(user.password, 10);

    const userData = {
      name: user.name,
      email: user.email,
      password: hashedPassword,
    };

    const savedUser = await User.create(userData);

    const { name, email, id } = savedUser;
    res.status(200).json({
      message: "user registered successfully",
      data: {
        id,
        name,
        email,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Invalid email or password." });
    }
    const token = generateToken(user.id);
    res.status(200).json({
      message: "Login successful.",
      data: {
        userId: user.id,
        token: token,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const googleLogin = async (req, res) => {
  res.send(
    '<h1>Home</h1><a href="http://localhost:8080/api/googleLogin">Login with Google</a>'
  );
};

export const googleCallback = async (req, res) => {
  const userData = {
    name: req.user.displayName,
    email: req.user.email,
  };
  console.log(userData);
  res.send(userData);
  res.redirect("/");
};
