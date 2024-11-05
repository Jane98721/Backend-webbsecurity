const express = require('express') //Importerat express
const app = express()
app.use(express.json()) //Hantera json data

app.use('/api/user', require('./routes/user_routes.js'));

module.exports = app //Exporterar app objektet så att den kan importeras i service.js