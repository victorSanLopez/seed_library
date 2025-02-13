import express from "express";

const router = express.Router();

router.use(express.static("public/assets/uploads/"));

import authRouter from "./routes/auth.routes";
router.use("/api/v1/auth", authRouter);

import seedRouter from "./routes/seed.routes";
router.use("/api/v1/seeds", seedRouter);

import userRouter from "./routes/user.routes";
router.use("/api/v1/users", userRouter);

export default router;
