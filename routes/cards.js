const express = require('express');
const router = express.Router();
const { data } = require('../data/flashcards.json');
const { cards } = data;

router.get('/', (req, res) => {
  function randNumGen (max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  const randomID = randNumGen(cards.length - 1);
  res.redirect(`/cards/${randomID}?side=question`);
});

router.get('/:id', (req, res) => {
  const { side } = req.query;
  const { id } = req.params;
  const text = cards[id][side];
  const { hint } = cards[id];
  const { link } = cards[id];

  const templateData = { text };

  if (side === 'question') {
    templateData.hint = hint;
    templateData.link = `/cards/${id}?side=answer`;
  }

  if (side === 'answer') {
    templateData.link = `/cards/${id}?side=question`;
  }

  res.render('card', templateData);
});




module.exports = router;
