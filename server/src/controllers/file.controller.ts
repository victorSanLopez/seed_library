import type { RequestHandler } from "express";
import multer from "multer";
import { upload } from "../middlewares/multer.middleware";

const fileController: RequestHandler = (req, res, next) => {
  upload.single("file")(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ error: `Erreur Multer: ${err.message}` });
    }
    if (err) {
      return res.status(400).json({ error: `Erreur: ${err.message}` });
    }
    req.body.picture = req.file?.filename || null;
    console.info("Fichier uploadé avec succès :", req.body.picture);
    next();
  });
};

export default fileController;
