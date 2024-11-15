const express = require('express');
const jwt = require ('jsonwebtoken')
const cors = require('cors')
const bodyParser = require ('body-parser')
const helmet = require ('helmet')

const app = express();

app.get('/health', (req, res) => {

    try {
    res.status(200).json({status: 'UP', timestamp: new Date()})
} catch (error) {
    console.error('Health check failed', error)
    res.status(500).send('Server error')
}
})

app.use(helmet())
app.use(cors());
app.use(bodyParser.json());

app.listen(4000, () => {
    console.log('Server is running on port 4000')
})

