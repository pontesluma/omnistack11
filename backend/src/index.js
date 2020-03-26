const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json()); // Define o uso de json no request body

app.use(routes);



app.listen(3333);