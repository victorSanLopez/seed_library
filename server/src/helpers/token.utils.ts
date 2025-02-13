import jwt from "jsonwebtoken";
import type { PayloadType } from "../types/helpers";

export const generateToken = async (payload: PayloadType): Promise<string> => {
  return jwt.sign(payload, process.env.APP_SECRET as string, {
    expiresIn: "24h",
  });
};

export const decodeToken = (token: string) => {
  return jwt.decode(token);
};

export const isTokenExpired = (token: string): boolean => {
  const decoded = jwt.decode(token) as { exp?: number } | null;
  if (!decoded || !decoded.exp) return true;
  return decoded.exp * 1000 < Date.now();
};
