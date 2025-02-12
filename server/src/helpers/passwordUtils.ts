import argon2 from "argon2";

export const generateHashedPassword = async (
  password: string,
): Promise<string> => {
  return await argon2.hash(password);
};

export const comparePasswords = async (
  hashedPassword: string,
  inputPassword: string,
): Promise<boolean> => {
  return await argon2.verify(hashedPassword, inputPassword);
};
