const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes')

const app = express();


mongoose.connect('mongodb+srv://<userName>:<passwolrd>@cluster0-6swcc.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology:true,
})

//GET, POST, PUT, DELETE

// req.query = Acessar query params (para filtros)
// req.params = acessar route params (para edição, delete)
//req.body = Acessar corpo da requisição (para criação, edição)

app.use(express.json());
app.use(routes);

app.listen(3333);
