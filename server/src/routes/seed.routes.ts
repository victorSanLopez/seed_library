import express from "express";
import seedActions from "../modules/seed/seedActions";

const router = express.Router();

router.post("/", seedActions.add);

export default router;
