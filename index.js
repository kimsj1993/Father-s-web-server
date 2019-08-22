const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');
const keys = require('./config/key');
require('./models/User')
require('./models/Review')
require('./services/passport');



mongoose.connect(keys.mongoURI, {useNewUrlParser: true});

const app = express();
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

require('./routes/auth')(app);



// must have for deploying
const PORT  = process.env.PORT || 3500;
app.listen(PORT);