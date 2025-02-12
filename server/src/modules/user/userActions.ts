import type { RequestHandler } from "express";
import userRepository from "./userRepository";

const add: RequestHandler = async (req, res, next) => {
  const newUser = req.body;

  try {
    const insertId: number = await userRepository.create(newUser);

    res.status(201).json({
      message: `Bienvenue ${req.body.username}`,
      id: insertId,
    });
  } catch (err) {
    next(err);
  }
};

export default { add };
