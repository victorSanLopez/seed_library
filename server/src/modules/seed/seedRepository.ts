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

  async readAllByUserId(userId: number) {
    const [rows] = await databaseClient.query<Rows>(
      `SELECT s.*, u.username
      FROM seed AS s
      JOIN user AS u ON s.user_id = u.id
      WHERE user_id = ?
      ORDER BY created_at DESC`,
      [userId],
    );
    return rows as SeedType[];
  }
}

export default new seedRepository();
