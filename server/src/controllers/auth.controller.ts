import type { RequestHandler } from "express";
import { generateToken } from "../helpers/token.utils";

export const login: RequestHandler = async (req, res, next) => {
  try {
    const { username } = req.body;
    const payload = { username };

    const token = await generateToken(payload);

    res
      .status(200)
      .cookie("auth_token", token, {
        secure: false,
        httpOnly: true,
        maxAge: 86400000,
      })
      .json({
        message: "Utilisateur connecté",
      });
    return;
  } catch (err) {
    next(err);
  }
};

export const logout: RequestHandler = (req, res) => {
  res
    .status(200)
    .clearCookie("auth_token")
    .json({ message: "Utilisateur déconnecté" });
};
