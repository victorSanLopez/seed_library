import express from "express";
import fileController from "../controllers/file.controller";
import seedActions from "../modules/seed/seedActions";

const router = express.Router();

router.get("/library", seedActions.browse);

router.post("/", fileController, seedActions.add);

export default router;
