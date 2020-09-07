const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/dist/aspiration'));

app.get('/*', (req,res) => {
    res.sendFile(__dirname + '/dist/aspiration/index.html');
});

app.listen(PORT, () => {
    console.log('Servidor iniciado na porta ' + PORT);
});