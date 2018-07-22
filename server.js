const express = require('express');
const app = express();

const hbs = require('hbs');

app.use(express.static(__dirname + '/public'));
// Express HBS Engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
require('./hbs/helpers/helpers')

app.get('/userData', (req, res) => {
    // res.send('Hello World');
    let message = {
        name: 'Santiago',
        age: 30,
        url: req.url
    };

    res.send(message);
});

app.get('/', (req, res) => {
    res.render('home', {
        username: 'Santiago cardeNas'
    });
});
app.get('/about', (req, res) => {
    res.render('about', {
        username: 'Santiago cardeNas'
    });
});

app.listen(3000, () => {
    console.log('Server listening to port 3000');
});