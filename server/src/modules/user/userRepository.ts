import databaseClient from "../../../database/client";
import type { Result } from "../../../database/client";
import type { UserType } from "../../types/modules";

class userRepository {
  async create(user: Omit<UserType, "id">) {
    const roleId = 2;
    const [result] = await databaseClient.query<Result>(
      `INSERT INTO user
        (username,
            email,
            password,
            role_id)
        VALUES
        (?, ?, ?, ?)`,
      [user.username, user.email, user.password, roleId],
    );

    return result.insertId;
  }
}

export default new userRepository();
