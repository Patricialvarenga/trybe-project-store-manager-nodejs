const express = require('express');
require('dotenv').config();

const PORT = 3000;

const app = express();
app.use(express.json());

app.use(require('./controllers/root'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use(require('./middlewares/error'));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
