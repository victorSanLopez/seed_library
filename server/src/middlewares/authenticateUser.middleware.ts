import type { RequestHandler } from "express";
import jwt from "jsonwebtoken";

export const authenticateUser: RequestHandler = async (req, res, next) => {
  try {
    const token = req.cookies.auth_token;

    if (!token) {
      res.status(403).json({ authenticated: false });
    }

    const verifiedToken = jwt.verify(token, process.env.APP_SECRET as string);

    if (verifiedToken) {
      next();
    } else {
      res.status(403).json({ authenticated: false });
      return;
    }
  } catch (err) {
    next(err);
  }
};
