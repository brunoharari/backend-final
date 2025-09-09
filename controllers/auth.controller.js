import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const mockUser = { id: 1, username: "admin", password: "1234" };

export const login = (req, res) => {
  const { username, password } = req.body;

  if (username === mockUser.username && password === mockUser.password) {
    const token = jwt.sign({ id: mockUser.id, username: mockUser.username }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ token });
  } else {
    res.status(401).json({ message: "Credenciales inválidas" });
  }
};
