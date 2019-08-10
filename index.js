const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());




app.get('/', (req, res) => {
    res.send({hi:'there'})
})

const PORT  = process.env.PORT || 3500;
app.listen(5000);