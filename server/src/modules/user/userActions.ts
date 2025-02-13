import type { RequestHandler } from "express";
import { decodeToken } from "../../helpers/token.utils";
import type { DecodedTokenType } from "../../types/helpers";
import type { UserType } from "../../types/modules";
import userRepository from "./userRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const users = await userRepository.readAll();

    res.json(users);
  } catch (err) {
    next(err);
  }
};

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

const getIdByTokenUsername: RequestHandler = async (req, res, next) => {
  try {
    const decodedToken = decodeToken(
      req.cookies.auth_token,
    ) as DecodedTokenType;

    const userId = await userRepository.readIdByUsername(
      decodedToken?.username,
    );

    if (!userId) {
      res
        .status(404)
        .json({ message: "Il semblerait que tu ne sois pas connecté 😅" });
    }

    req.body.user_id = userId;

    next();
  } catch (err) {
    next(err);
  }
};

const readTokenRoleByUsername: RequestHandler = async (req, res, next) => {
  try {
    const decodedToken = decodeToken(
      req.cookies.auth_token,
    ) as DecodedTokenType;

    const userRole = await userRepository.readRoleByUsername(
      decodedToken?.username,
    );

    if (userRole !== 1) {
      res.json({ authentified: false });
    } else {
      res.json({ authentified: true });
    }
  } catch (err) {
    next(err);
  }
};

const destroy: RequestHandler = async (req, res, next) => {
  try {
    const userId = Number(req.params.id);

    await userRepository.delete(userId);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

export default {
  browse,
  add,
  getHashedPasswordByEmail,
  getIdByTokenUsername,
  readTokenRoleByUsername,
  destroy,
};
