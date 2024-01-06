import User from "../Model/User.js";
import bcryptjs from "bcryptjs";

export const RegisterUser = async (req, res) => {
  try {
    console.log("jjj");
    const { name, email, password } = req.body;
    console.log("body", req.body);
    const hashPassword = bcryptjs.hashSync(password, 10);
    const user = await User.create({
      name,
      email,
      password: hashPassword,
    });
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
