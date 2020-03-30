const express = require('express');
const app = express();

app.get('/', (req, res) => {
    return res.json({jossias: 'ola mundo'});
})


app.listen(3333, () => console.log(`Servidor iniciou na porta 3333`));
