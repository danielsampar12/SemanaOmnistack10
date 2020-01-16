const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
//MongoDB (Não relacional)
mongoose.connect('mongodb+srv://dgsampar:@Root@clustersemanaomnistack-pvlxj.mongodb.net/SemanaOmnistack10?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express();
app.use(express.json());
app.use(routes);

app.listen(3333);
