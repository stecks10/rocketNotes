const AppError = require('../utils/AppError');

const sqliteConnection = require('../database/connection');

class UserController {
  async create(request, response) {
    const { name, email, password } = request.body;

    const database = await sqliteConnection;
    const checkUserExists = await database.get('SELECT * FROM users WHERE email = (?)', [email]);
    if (checkUserExists) {
      throw new AppError('Email address already used', 400);
    }
    return response.status(201).json();
  }
}

module.exports = UserController;