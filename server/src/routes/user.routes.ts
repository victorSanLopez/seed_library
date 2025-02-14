import express from "express";
import { hashPassword } from "../middlewares/hashPassword.middleware";
import userActions from "../modules/user/userActions";

const router = express.Router();

router.get("/user-list", userActions.browse);
router.post("/", hashPassword, userActions.add);
router.delete("/:id", userActions.destroy);

export default router;
