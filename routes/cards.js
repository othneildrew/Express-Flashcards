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

  if (!side) {
    return res.redirect(`/cards/${id}?side=question`);
  }

  //TODO: add error handling for queries where side !== 'question' || side !== 'answer'

  const name = req.cookies.username;
  const text = cards[id][side];
  const { hint } = cards[id];
  const { link } = cards[id];

  const templateData = { text, name };

  if (side === 'question') {
    templateData.title = 'Question';
    templateData.hint = hint;
    templateData.link = `/cards/${id}?side=answer`;
  } else if (side === 'answer') {
    templateData.title = 'Answer';
    templateData.link = `/cards/${id}?side=question`;
  }

  res.render('card', templateData);
});




module.exports = router;
