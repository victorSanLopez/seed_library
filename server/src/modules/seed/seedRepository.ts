import databaseClient from "../../../database/client";
import type { Result } from "../../../database/client";
import type { SeedType } from "../../types/modules";

class seedRepository {
  async create(seed: Omit<SeedType, "id">) {
    const categoryId = 1;
    const userId = 6;
    const [result] = await databaseClient.query<Result>(
      `INSERT INTO seed
        (label,
            description,
            image,
            category_id,
            user_id)
        VALUES
        (?, ?, ?, ?, ?)`,
      [seed.label, seed.description, seed.image, categoryId, userId],
    );

    return result.insertId;
  }
}

export default new seedRepository();
