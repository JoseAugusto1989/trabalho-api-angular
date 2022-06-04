const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/fa-marvel'));

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/dist/fa-marvel/index.html');
})

app.listen(PORT, () => {
    console.log('serivdor iniciado na porta' + PORT);
})