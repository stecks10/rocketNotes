const { hash, compare } = require('bcryptjs');
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
    const { name, email, password, old_password } = request.body;
    const { id } = request.params;

    const database = await sqliteConnection();
    const user = await database.get('SELECT * FROM users WHERE id = (?)', [id]);

    if (!user) {
      throw new AppError('User not found');
    }

    user.name = name;
    user.email = email;

    if (password && !old_password) {
      throw new AppError("voce precisa informar a senha antiga para definir a nova senha.")
    }

    if (password && old_password) {
      const checkOldPassword = await compare(old_password, user.password)

      if (!checkOldPassword) {
        throw new AppError("A senha antiga nao confere");
      }
      user.password = await hash(password, 8);
    }

    await database.run(`
    UPDATE users SET
    name = ?,
    email = ?,
    password = ?,
    updated_at = DATETIME('now')
    WHERE id = ?`,
      [user.name, user.email, user.password, id]
    );

    return response.json();
  }
}

module.exports = UserController;