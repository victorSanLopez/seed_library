import jwt from "jsonwebtoken";
import type { PayloadType } from "../types/helpers";

export const generateToken = async (payload: PayloadType): Promise<string> => {
  return jwt.sign(payload, process.env.APP_SECRET as string, {
    expiresIn: "24h",
  });
};
