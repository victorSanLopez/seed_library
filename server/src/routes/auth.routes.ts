import express from "express";
import { login } from "../controllers/auth.controller";
import { validatePassword } from "../middlewares/validatePassword.middleware";
import userActions from "../modules/user/userActions";

const router = express.Router();

router.post(
  "/login",
  userActions.getHashedPasswordByEmail,
  validatePassword,
  login,
);

export default router;
