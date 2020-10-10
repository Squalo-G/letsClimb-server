const express = require('express');
require('./db/mongoose');

const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server is up on port ' + port)
});

app.get('/', (req, res) => {
    res.send('letsClimb initial page!');
});