import type { RequestHandler } from "express";
import type { SeedType } from "../../types/modules";
import seedRepository from "./seedRepository";

const add: RequestHandler = async (req, res, next) => {
  try {
    const newSeed = {
      label: req.body.label,
      description: req.body.description,
      image: req.file?.filename,
    };

    const insertId = await seedRepository.create(newSeed);

    res.status(201).json({
      message: `Le sachet ${req.body.label} rejoint ta grainothèque ! 🌿`,
      id: insertId,
    });
  } catch (err) {
    next(err);
  }
};

export default { add };
