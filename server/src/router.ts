import express from "express";

const router = express.Router();

import authRouter from "./routes/auth.routes";
router.use("/api/v1/auth", authRouter);

import userRouter from "./routes/user.routes";
router.use("/api/v1/users", userRouter);

export default router;
