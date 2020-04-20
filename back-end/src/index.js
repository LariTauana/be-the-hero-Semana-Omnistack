const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());          //importante que venha antes das rotas, pois aqui diz que antes de todas as requisiçõeas preciso converter esse json em objeto do js
app.use(routes);

app.listen(3333);
