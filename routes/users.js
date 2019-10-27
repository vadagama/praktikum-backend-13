/* eslint-disable no-underscore-dangle */
/* eslint-disable quotes */
/* eslint-disable quote-props */

const usersRouter = require('express').Router();
const users = require('../data/users');

usersRouter.get('/users', (req, res) => {
  res.send(users);
});

usersRouter.get('/users/:id', (req, res) => {
  const { id } = req.params;
  let flag = '';
  users.forEach((item) => {
    if (item._id === id) {
      flag = item;
    }
  });

  if (!flag) {
    res.send({ "message": "Нет пользователя с таким id" });
    return;
  }
  res.send(flag);
});

module.exports = usersRouter;
