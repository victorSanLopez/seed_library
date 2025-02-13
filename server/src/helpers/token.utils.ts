import jwt from "jsonwebtoken";
import type { PayloadType } from "../types/helpers";

export const generateToken = (payload: PayloadType): string => {
  return jwt.sign(payload, process.env.APP_SECRET as string, {
    expiresIn: "24h",
  });
};

export const decodeToken = (token: string) => {
  const decoded = jwt.decode(token);
  return decoded;
};

export const isTokenExpired = (token: string): boolean => {
  const decoded = jwt.decode(token) as { exp?: number } | null;
  if (!decoded || !decoded.exp) return true;
  return decoded.exp * 1000 < Date.now();
};
