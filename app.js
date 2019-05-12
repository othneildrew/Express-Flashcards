const express = require('express');
const app = express();
const port = 3333;


const colors = ['red', 'blue', 'green', 'yellow', 'red', 'pink'];


app.set('view engine', 'pug');

app.listen(port);

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/cards', (req, res) => {
  res.render('card', {
    prompt: 'This airplane flew 98 seconds when it was first built.',
    hint: 'Think about the first engine-driven aircraft',
    colors: colors
  });
});
