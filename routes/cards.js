const cardsRouter = require('express').Router();
const cards = require('../data/cards');

const getCards = (req, res) => {
  res.send(cards);
};

cardsRouter.get('/cards', getCards);

module.exports = cardsRouter;
