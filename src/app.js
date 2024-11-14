const express = require('express');
const jwt = require ('jsonwebtoken')
const cors = require('cors')
const bodyParser = require ('body-parser')
const helmet = require ('helmet')

const app = express();

app.use(helmet())
app.use(cors({
    origin: 'https://localhost/'
}

));
app.use(bodyParser.json());

app.listen(4000, () => {
    console.log('Server is running on port 4000')
})

