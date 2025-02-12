import type { RequestHandler } from "express";
import type { UserType } from "../../types/modules";
import userRepository from "./userRepository";

const add: RequestHandler = async (req, res, next) => {
  const newUser = req.body;

  try {
    const insertId: number = await userRepository.create(newUser);

    res.status(201).json({
      message: `Bienvenue dans l'aventure ${req.body.username} ! 🚀 `,
      id: insertId,
    });
  } catch (err) {
    next(err);
  }
};

const getHashedPasswordByEmail: RequestHandler = async (req, res, next) => {
  try {
    const email: UserType | null = await userRepository.readByEmail(
      req.body.email,
    );
    if (!email) {
      res.status(402);
      return;
    }
    req.body.hashedPassword = email.password;

    next();
  } catch (err) {
    next(err);
  }
};

export default { add, getHashedPasswordByEmail };
