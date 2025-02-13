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

  async readAll() {
    const [rows] = await databaseClient.query<Rows>(
      `SELECT u.id, u.username, u.email, u.created_at
      FROM user AS u
      JOIN role ON u.role_id = role.id
      ORDER BY created_at DESC`,
    );
    return rows as UserType[];
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

  async readIdByEmail(payloadEmail: string) {
    const [rows] = await databaseClient.query<Rows>(
      `SELECT id
        FROM user
        WHERE email = ?`,
      [payloadEmail],
    );

    return rows[0].id as number;
  }

  async readRoleByEmail(payloadEmail: string) {
    const [rows] = await databaseClient.query<Rows>(
      `SELECT role_id
        FROM user
        WHERE email = ?`,
      [payloadEmail],
    );

    return rows[0].role_id as number;
  }

  async delete(id: number) {
    const [result] = await databaseClient.query<Result>(
      `DELETE FROM user
      WHERE id = ?`,
      [id],
    );

    return result.affectedRows;
  }
}

export default new userRepository();
