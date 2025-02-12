import type { RequestHandler } from "express";
import { comparePasswords } from "../helpers/passwordUtils";

export const validatePassword: RequestHandler = async (req, res, next) => {
  try {
    const { hashedPassword, password } = req.body;

    if (!hashedPassword || !password) {
      res.status(400).json({ message: "Missing password fields" });
      return;
    }

    const isValid = await comparePasswords(hashedPassword, password);

    if (!isValid) {
      res.status(403).json({ message: "Invalid credentials" });
      return;
    }

    next();
  } catch (err) {
    next(err);
  }
};
