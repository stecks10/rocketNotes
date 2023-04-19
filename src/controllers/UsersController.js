const { hash } = require('bcryptjs');
const AppError = require('../utils/AppError');
const sqliteConnection = require('../database/sqlite');


class UserController {
  async create(request, response) {
    const { name, email, password } = request.body;
    const database = await sqliteConnection();
    const checkUserExists = await database.get('SELECT * FROM users WHERE email = (?)', [email]);

    if (checkUserExists) {
      throw new AppError('User already exists');
    }

    const hashPassword = await hash(password, 8);

    await database.run(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, hashPassword]
    );

    return response.status(201).json();
  }

  async update(request, response) {
    const { name, email } = request.body;
    const { id } = request.params;

    const database = await sqliteConnection();
    const user = await database.get('SELECT * FROM users WHERE id = (?)', [id]);

    if (!user) {
      throw new AppError('User not found');
    }

    const userWithUpdateEmail = await database.get('SELECT * FROM users WHERE email = (?)', [email]);

    if (userWithUpdateEmail && userWithUpdateEmail.id !== user.id) {
      throw new AppError('E-mail already exists');
    }

    user.name = name;
    user.email = email;

    await database.run(`
      UPDATE users SET
      name = ?,
      email = ?,
      update_at = ?,
      where id = ?`,
      [user.name, user.email, new Date(), user.id]
    );

    return response.json();
  }
}

module.exports = UserController;