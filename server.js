const express = require('express');
const app = express();

app.use('/', express.static(__dirname + '/pages'));

app.get('/enter', (req, res) => console.log('user on enter page'))
app.get('/enter', express.static(__dirname + '/pages/enter'));

app.get('/about_us', (req, res) => console.log('user on about_us page'))
app.get('/about_us', express.static(__dirname + '/pages/about_us'));

app.listen(8088);

console.log('all ok!');