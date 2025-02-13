import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";
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

  async readByEmail(email: string) {
    const [rows] = await databaseClient.query<Rows>(
      `SELECT email, password
        FROM user 
        WHERE email = ?`,
      [email],
    );

    return rows.length ? (rows[0] as UserType) : null;
  }

  async readIdByUsername(payloadUsername: string) {
    const [rows] = await databaseClient.query<Rows>(
      `SELECT id
        FROM user
        WHERE username = ?`,
      [payloadUsername],
    );

    return rows[0].id as number;
  }
}

export default new userRepository();
