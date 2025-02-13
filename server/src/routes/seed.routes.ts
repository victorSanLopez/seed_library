import express from "express";
import fileController from "../controllers/file.controller";
import seedActions from "../modules/seed/seedActions";
import userActions from "../modules/user/userActions";

const router = express.Router();

router.get(
  "/user-seed-library/",
  userActions.getIdByTokenUsername,
  seedActions.readByUserId,
);
router.post("/", fileController, seedActions.add);

export default router;
