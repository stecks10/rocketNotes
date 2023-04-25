const { Router } = require('express');

const usersRouter = require('./users.routes')
const notesRoutes = require('./notes.routes')
const tagsRoutes = require('./tags.routes')
const sessionRoutes = require('./sessions.routes')

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionRoutes);
routes.use('/notes', notesRoutes);
routes.use('/tags', tagsRoutes);

module.exports = routes;