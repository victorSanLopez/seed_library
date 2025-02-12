import express from "express";

const router = express.Router();

import userRouter from "./routes/user.routes";
router.use("/api/v1/users", userRouter);

export default router;
