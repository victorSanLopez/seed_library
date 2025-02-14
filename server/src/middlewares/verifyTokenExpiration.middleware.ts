import type { RequestHandler } from "express";
import { isTokenExpired } from "../helpers/token.utils";

export const verifyTokenExpiration: RequestHandler = (req, res, next) => {
  const token = req.cookies.auth_token;

  if (!token) {
    res
      .status(403)
      .json({ authenticated: false, message: "No token provided" });
    return;
  }

  if (isTokenExpired(token)) {
    res.status(401).json({ authenticated: false, message: "Token expired" });
    return;
  }

  next();
};
