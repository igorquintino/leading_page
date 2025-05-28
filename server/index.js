const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public')); // se os arquivos HTML/CSS/JS estiverem na pasta public

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
