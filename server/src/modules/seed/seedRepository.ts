import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";
import type { SeedType } from "../../types/modules";

class seedRepository {
  async create(seed: Omit<SeedType, "id">) {
    const categoryId = 1;
    const userId = 6;
    const [result] = await databaseClient.query<Result>(
      `INSERT INTO seed
        (label, description, image, category_id, user_id)
        VALUES
        (?, ?, ?, ?, ?)`,
      [seed.label, seed.description, seed.image, categoryId, userId],
    );

    return result.insertId;
  }

  async readAll() {
    const [rows] = await databaseClient.query<Rows>(
      `SELECT
      s.*,
      c.label AS category_label
      FROM seed AS s
      JOIN category AS c ON s.category_id = c.id
      ORDER BY s.created_at DESC`,
    );
    return rows as SeedType[];
  }
}

export default new seedRepository();
