const express = require('express');
const logger = require('morgan');

const app = express();

if(process.env.NODE_ENV !== 'test') {
    app.use(logger('dev'));
}

app.get('/', (req, res) => {
    res.json({ status: 'success' });
});

let data = { data: 'Any String' }

app.post('/data', (req, res) => {
    res.json(data);
});

app.get('/data', (req, res) => {
    res.json(data);
});

app.listen(3000, () => console.log('Listening on port 3000'));

module.exports = app; //for testing