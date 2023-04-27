const { Router } = require('express');
const UserController = require('../controllers/UsersController');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');
const multer = require('multer');
const uploadConfig = require('../configs/upload');

const usersRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const userController = new UserController();

usersRoutes.post("/", userController.create);
usersRoutes.put("/", ensureAuthenticated, userController.update);
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single('avatar'),
  (request, response) => {
    console.log(request.file.filename);
    response.json({ ok: true });
  }
);

module.exports = usersRoutes;