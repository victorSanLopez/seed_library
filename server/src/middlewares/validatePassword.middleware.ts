import type { RequestHandler } from "express";
import { comparePasswords } from "../helpers/passwordUtils";

export const validatePassword: RequestHandler = async (req, res, next) => {
  try {
    const { hashedPassword, inputPassword } = req.body;

    if (!hashedPassword || !inputPassword) {
      res.status(400).json({ message: "Missing password fields" });
      return;
    }

    const isValid = await comparePasswords(hashedPassword, inputPassword);

    if (!isValid) {
      res.status(403).json({ message: "Invalid credentials" });
      return;
    }

    next();
  } catch (err) {
    next(err);
  }
};
