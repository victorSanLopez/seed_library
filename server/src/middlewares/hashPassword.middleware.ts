import type { RequestHandler } from "express";
import { generateHashedPassword } from "../helpers/passwordUtils";

export const hashPassword: RequestHandler = async (req, res, next) => {
  try {
    if (!req.body.password) {
      res.status(400).json({ message: "Password is required" });
      return;
    }

    req.body.password = await generateHashedPassword(req.body.password);
    next();
  } catch (err) {
    next(err);
  }
};
