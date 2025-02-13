import express from "express";
import { login, logout } from "../controllers/auth.controller";
import { authenticateUser } from "../middlewares/authenticateUser.middleware";
import { validatePassword } from "../middlewares/validatePassword.middleware";
import { verifyTokenExpiration } from "../middlewares/verifyTokenExpiration.middleware";
import userActions from "../modules/user/userActions";

const router = express.Router();

router.post(
  "/login",
  userActions.getHashedPasswordByEmail,
  validatePassword,
  login,
);
router.post("/logout", logout);

router.use(authenticateUser, verifyTokenExpiration);
router.get("/protected", userActions.readTokenRoleByUsername);

export default router;
