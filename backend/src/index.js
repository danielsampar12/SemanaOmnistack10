const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
//MongoDB (Não relacional)
const app = express();

mongoose.connect('mongodb+srv://dgsampar:@Root@clustersemanaomnistack-pvlxj.mongodb.net/SemanaOmnistack10?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
