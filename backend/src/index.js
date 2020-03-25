const express = require('express');
const cors = require("cors");
const routes = require("./routes");

const app = express();

// config para produção
// app.use(cors({
//     origin: 'http://meuapp.com'
// }));

app.use(cors());

app.use(express.json()); // deixar antes das rotas
app.use(routes);

app.listen(3333);